'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Avatar() {
  const router = useRouter();

  return (
    <div className="relative flex text-5xl items-center justify-center size-32 shrink-0">
      <div className="flex items-center justify-center avatar size-32 rounded-full bg-neutral-300 border-neutral-400">
        <span className="z-50 cursor-pointer" onClick={() => router.push('/')}>
          TD
        </span>
      </div>
    </div>
  );
}
