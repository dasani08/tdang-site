import type { Metadata } from 'next';

import Header from '@/components/header';
import { Markdown } from '@/lib/markdown';
import CoverImage from '@/components/cover-image';
import Date from '@/components/date';
import { getPost } from '@/lib/api';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug, false);

  return {
    title: post!.title,
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug, false);

  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title={post.title} />
      <div className="relative rounded-xl overflow-auto p-8 max-w-screen-lg">
        {post.coverImage && (
          <div className="mb-4 md:mb-8 sm:mx-0">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>
        )}
        <div className="prose max-w-none">
          <Markdown content={post.content} />
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Posted: <Date dateString={post.date} />
        </p>
      </div>
    </div>
  );
}
