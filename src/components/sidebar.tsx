'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useTheme } from '@/state/theme-context';

export default function Sidebar() {
  const { isOpenSidebar, toggleSidebar } = useTheme();
  const pathname = usePathname();

  return (
    <aside
      className={`fixed z-30 top-0 shrink-0 md:w-64 md:flex md:flex-col h-screen w-full ${
        isOpenSidebar ? '' : 'hidden'
      } bg-gradient-to-r from-slate-50 to-slate-200 to-80%`}
    >
      <div className="h-full text-center">
        <div className="absolute top-0 right-0 pt-4 pr-4 md:hidden">
          <Image
            onClick={toggleSidebar}
            src="/icons/x.svg"
            alt=""
            width={36}
            height={36}
          />
        </div>
        <div className="px-4 pt-8">
          <h1 className="text-3xl text-slate-700">
            <a href="/">Thanh Dang</a>
          </h1>
          <div className="mt-8 text-center">
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
          <ul className="mt-8 space-y-2">
            <li
              className={`py-1 rounded-2xl ${
                pathname.indexOf('/work') !== -1
                  ? 'bg-slate-500 text-slate-50'
                  : 'text-slate-900'
              } hover:bg-slate-400 hover:text-slate-50`}
            >
              <a className="inline-flex justify-center w-full" href="/work">
                PROJECTS
              </a>
            </li>
            <li
              className={`py-1 rounded-2xl ${
                pathname === '/me'
                  ? 'bg-slate-500 text-slate-50'
                  : 'text-slate-900'
              } hover:bg-slate-400 hover:text-slate-50`}
            >
              <a
                className="inline-flex justify-center w-full hover:underline"
                href="/me"
              >
                ABOUT
              </a>
            </li>
            <li
              className={`py-1 rounded-2xl ${
                pathname === '/'
                  ? 'bg-slate-500 text-slate-50'
                  : 'text-slate-900'
              } hover:bg-slate-400 hover:text-slate-50`}
            >
              <a
                className="inline-flex justify-center w-full hover:underline"
                href="/"
              >
                POSTS
              </a>
            </li>
            <li
              className={`py-1 rounded-2xl ${
                pathname === '/photo'
                  ? 'bg-slate-500 text-slate-50'
                  : 'text-slate-900'
              } hover:bg-slate-400 hover:text-slate-50`}
            >
              <a
                className="inline-flex justify-center w-full hover:underline"
                href="/photo"
              >
                PHOTOGRAPHY
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mx-auto inline-block">
        <p className="font-light text-sm">
          Made with <span>❤️</span>
        </p>
        <p className="font-light text-sm">
          Hosted on{' '}
          <a
            className="text-sky-600"
            href="https://github.com/dasani08/tdang-site"
          >
            Github
          </a>{' '}
          - Running on{' '}
          <a className="text-sky-600" href="https://www.netlify.com/">
            Netlify
          </a>
        </p>
        <p className="font-light text-sm">© 2024 - Thanh Dang</p>
      </div>
    </aside>
  );
}
