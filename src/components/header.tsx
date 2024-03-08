'use client';
import clsx from 'clsx';
import { useTheme } from '@/state/theme-context';

export default function Header({
  title,
  mdx = false,
}: {
  title: string;
  mdx?: boolean;
}) {
  const { toggleSidebar } = useTheme();

  return (
    <div
      className={clsx([
        'flex py-8 text-2xl font-light border-b border-slate-200 items-center justify-between',
        !mdx && 'md:px-8 sm:px-8 px-4',
      ])}
    >
      <span>{title}</span>
      <div className="md:hidden pr-4">
        <button
          className="flex shadow-md shadow-slate-300 items-center justify-center p-4 bg-sky-300 rounded-lg text-slate-50 fill-current"
          onClick={toggleSidebar}
        >
          <span className="flex items-center size-5 grow-0 shrink-0">
            <svg
              className="h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 14"
            >
              <path d="M19,8H1A1,1,0,0,1,1,6H19a1,1,0,0,1,0,2Z"></path>
              <path d="M19,2H1A1,1,0,0,1,1,0H19a1,1,0,0,1,0,2Z"></path>
              <path d="M19,14H1a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
