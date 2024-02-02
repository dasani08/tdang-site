'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ImageProps } from '@/lib/types';

export default function AllPhotos({ images }: { images: ImageProps[] }) {
  return (
    <div className="columns-3xs gap-8 space-y-8">
      {images.map(({ id, url, width, height }) => (
        <Link
          key={id}
          href={`/photo/${id}`}
          // ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
          shallow
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <Image
            alt="My Photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: 'translate3d(0, 0, 0)' }}
            src={url}
            width={width}
            height={height}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </Link>
      ))}
    </div>
  );
}
