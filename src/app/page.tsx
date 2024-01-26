'use client';

import React from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main
      className={`flex bg-neutral-200 min-h-screen flex-col justify-center items-center p-24`}
    >
      <div
        className={`relative transition ease-in-out flex flex-col items-center container mx-auto max-w-5xl`}
      >
        <Header />
      </div>
      <Footer />
    </main>
  );
}
