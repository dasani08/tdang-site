'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Avatar from '@/components/avatar';

export default function Header({ currentPage }: any) {
  const router = useRouter();
  return (
    <>
      <Avatar />
      <div className="mt-3 text-center">
        <div className="inline-flex items-center justify-center space-x-2 mx-2">
          <Image
            src="/icons/github.svg"
            alt="Picture of the author"
            width={16}
            height={16}
          />
          <a
            className="text-sm hover:underline inline-block"
            href="https://github.com/dasani08"
          >
            dasani08
          </a>
        </div>
        <div className="inline-flex items-center justify-center space-x-2 mx-2">
          <Image
            src="/images/LinkedIn_icon.svg"
            alt="Picture of the author"
            width={16}
            height={16}
          />
          <a
            className="text-sm hover:underline inline-block"
            href="https://www.linkedin.com/in/thanh-dc/"
          >
            Thanh Dang
          </a>
        </div>
      </div>
      <p className="font-['Roboto_Light'] text-lg mt-8 text-neutral-700">
        Hi, my name is Thanh, and I am a full-stack developer
      </p>
      <div className="mt-8">
        <button
          className={`font-['Roboto_Light'] shadow-btn mx-2 px-6 py-1 text-base font-medium rounded-lg hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none ${
            currentPage === 'work'
              ? 'bg-sky-500 text-neutral-50'
              : 'text-neutral-600'
          }`}
          onClick={() => router.push('/work')}
        >
          MY WORKS
        </button>
        <button
          className={`font-['Roboto_Light'] shadow-btn mx-2 px-6 py-1 text-base font-medium rounded-lg hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none ${
            currentPage === 'me'
              ? 'bg-sky-500 text-neutral-50'
              : 'text-neutral-600'
          }`}
          onClick={() => router.push('/me')}
        >
          ABOUT ME
        </button>
      </div>
    </>
  );
}
