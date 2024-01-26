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
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
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
            currentPage === 'mywork'
              ? 'bg-sky-500 text-neutral-50'
              : 'text-neutral-600'
          }`}
          onClick={() => router.push('/mywork')}
        >
          MY WORKS
        </button>
        <button
          className={`font-['Roboto_Light'] shadow-btn mx-2 px-6 py-1 text-base font-medium rounded-lg hover:text-white hover:bg-sky-600 hover:border-transparent focus:outline-none ${
            currentPage === 'aboutme'
              ? 'bg-sky-500 text-neutral-50'
              : 'text-neutral-600'
          }`}
          onClick={() => router.push('/aboutme')}
        >
          ABOUT ME
        </button>
      </div>
    </>
  );
}
