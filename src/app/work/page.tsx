'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Header from '@/components/header';

export default function Mywork() {
  const router = useRouter();
  const selectProjectHandle = (name: string) => {
    router.push(`/work/${name}`);
  };

  return (
    <div className={`relative bg-slate-50 h-full`}>
      <Header title="MY WORKS" />
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative group/item flex rounded-lg bg-white shadow-lg px-28 py-28 items-center justify-center bg-[url('/images/Freight.png')] bg-no-repeat bg-auto bg-center transform transition hover:scale-[1.01]"
            onClick={() => selectProjectHandle('netwila')}
          >
            <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 text-xl font-light text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
              NETWILA - Freight Management
            </div>
          </div>
          <div
            className="relative group/item flex rounded-lg bg-white shadow-lg px-28 py-28 items-center justify-center bg-[url('/images/Duongtang.png')] bg-no-repeat bg-contain bg-center transform transition hover:scale-[1.01]"
            onClick={() => selectProjectHandle('duongtang')}
          >
            <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-light text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
              DUONG TANG - Streaming Service
            </div>
          </div>
          <div
            className="relative group/item flex rounded-lg bg-white shadow-lg px-28 py-28 items-center justify-center bg-[url('/images/Nupix.png')] bg-no-repeat bg-cover transform transition hover:scale-[1.01]"
            onClick={() => selectProjectHandle('nupix')}
          >
            <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-light text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
              NUPIX - Live Countdown
            </div>
          </div>
          <div
            className="relative group/item flex rounded-lg bg-white shadow-lg px-28 py-28 items-center justify-center bg-[url('/images/Adkit.png')] bg-no-repeat bg-cover transform transition hover:scale-[1.01]"
            onClick={() => selectProjectHandle('adkit')}
          >
            <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-light text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
              Adkit - Admin Template
            </div>
          </div>
          <div
            className="relative group/item flex rounded-lg bg-white shadow-lg px-28 py-28 items-center justify-center bg-[url('/images/mama4mama.png')] bg-no-repeat bg-auto bg-center transform transition hover:scale-[1.01]"
            onClick={() => selectProjectHandle('mama')}
          >
            <div className="flex rounded-b-lg bg-neutral-500/70 pl-4 font-light text-xl font-bold text-neutral-50 absolute left-0 bottom-0 w-full h-16 items-center invisible group-hover/item:visible">
              Mama 4 Mama - Marketplace for Mamas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
