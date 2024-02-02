export const POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  title
  coverImage {
    url
    description
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  postTagCollection(limit: 10) {
    items {
      name
    }
  }
`;

export const PHOTO_GRAPHQL_FIELDS = `
  sys {
    id
  }
  url
  width
  height
`;
