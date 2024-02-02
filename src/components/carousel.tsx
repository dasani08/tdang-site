'use client';

import { useRouter } from 'next/navigation';
import type { ImageProps } from '@/lib/types';
import SharedModal from './shared-modal';

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const router = useRouter();

  function closeModal() {
    router.push('/photo');
  }

  function changePhotoId(newVal: number) {
    return newVal;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black backdrop-blur-2xl">
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  );
}
