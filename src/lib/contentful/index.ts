import { PHOTO_GRAPHQL_FIELDS, POST_GRAPHQL_FIELDS } from './queries';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

type ContentfulItem<T> = T & { sys: { id: string } };

type ContentfulReponse<T> = {
  status: number;
  body: {
    [key: string]: {
      items: Array<ContentfulItem<T>>;
    };
  };
};

function extractOne<T>(res: ContentfulReponse<T>, collection: string): T {
  return res.body[collection].items.map((item) => ({
    id: item.sys.id,
    ...item,
  }))[0];
}

function extractMany<T>(res: ContentfulReponse<T>, collection: string): T[] {
  return res.body[collection].items.map((item) => ({
    id: item.sys.id,
    ...item,
  }));
}

export async function contentfulFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
}): Promise<ContentfulReponse<T>> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        ...headers,
      },
      body: JSON.stringify({
        query,
      }),
      cache,
      ...(tags && { next: { tags } }),
    });
    const body = await result.json();

    if (body.error) {
      throw body.error.errors[0];
    }

    return {
      status: result.status,
      body: body.data,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}

export async function getAllPosts(): Promise<any[]> {
  const result = await contentfulFetch({
    query: `
      query {
        postCollection(where: { slug_exists: true }, order: date_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    tags: ['posts'],
  });

  return extractMany(result, 'postCollection');
}

export async function getPost(slug: string): Promise<any> {
  const result = await contentfulFetch({
    query: `query {
        postCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    tags: ['posts'],
  });

  return extractOne(result, 'postCollection');
}

export async function getPhotos(): Promise<any> {
  const result = await contentfulFetch({
    query: `
      query {
        photoCollection(where: {}, order: date_DESC) {
          items {
            ${PHOTO_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    tags: ['photos'],
  });

  return extractMany(result, 'photoCollection');
}
