'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-base font-sans">
      <div className="mx-auto w-full">
        <div className="flex h-full">
          <Sidebar />
          <div className="fixed h-screen w-full md:ml-64 bg-white overflow-x-hidden">
            <div className="w-full mx-auto">
              <Header title="POSTS" />
              <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 border-t border-slate-100">
                {/* <article className="py-10 sm:py-12">
                  <div className="md:px-8 sm:px-12 px-4">
                    <time className="order-first font-mono text-sm leading-7 text-slate-500">
                      February 24, 2022
                    </time>
                    <h2>
                      <a href="#" className="hover:underline text-xl">
                        Differences Between Type Aliases and Interfaces
                      </a>
                    </h2>
                    <ul className="flex space-x-2 mt-4">
                      <li className="rounded-xl bg-slate-200 px-4">
                        Typescript
                      </li>
                      <li className="rounded-xl bg-slate-200 px-4">
                        Javascript
                      </li>
                    </ul>
                  </div>
                </article> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
