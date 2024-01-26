'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Avatar() {
  const router = useRouter();

  return (
    <div className="font-['Roboto_Thin'] relative flex text-5xl items-center justify-center size-32 shrink-0">
      <span className="z-50 cursor-pointer" onClick={() => router.push('/')}>
        TD
      </span>
      <Image
        src={'/images/AvatarHolder.svg'}
        width="128"
        height="128"
        alt="Thanh Dang"
        className="absolute left-0 top-0 cursor-pointer"
        onClick={() => router.push('/')}
      />
    </div>
  );
}
