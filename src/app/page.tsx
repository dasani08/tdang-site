import React from 'react';
import Link from 'next/link';

import Sidebar from '@/components/sidebar';
import Date from '@/components/date';
import Header from '@/components/header';

import posts from './post.json';

export const revalidate = 3600;

function Article({
  title,
  date,
  slug,
  tags,
}: {
  title: string;
  date: string;
  slug: string;
  tags: Array<{ name: string }>;
}) {
  return (
    <article className="py-10 sm:py-12">
      <div className="md:px-8 sm:px-12 px-4">
        <time className="order-first font-mono text-sm leading-7 text-slate-500">
          <Date dateString={date} />
        </time>
        <h2>
          <Link href={`/post/${slug}`} className="hover:underline text-xl">
            {title}
          </Link>
        </h2>
        <ul className="flex space-x-2 mt-4">
          {tags.map((tag) => (
            <li key={tag.name} className="rounded-xl bg-slate-200 px-4">
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-base font-sans">
      <div className="mx-auto w-full">
        <div className="flex h-full">
          <Sidebar />
          <div className="fixed h-screen w-full md:ml-64 bg-white overflow-x-hidden">
            <Header title="" />
            <div className="w-full mx-auto">
              <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8">
                {posts.map((post) => (
                  <Article
                    key={post.slug}
                    title={post.title}
                    date={post.date}
                    slug={post.slug}
                    tags={post.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
