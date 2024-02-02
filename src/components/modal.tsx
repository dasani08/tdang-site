'use client';

import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

import { ImageProps } from '@/lib/types';

import SharedModal from './shared-modal';

type ModelProps = {
  images: ImageProps[];
  id: string;
  onClose?(): void;
};

export default function Modal({ images, id }: ModelProps) {
  let overlayRef = useRef(null);
  const router = useRouter();

  let index = images.findIndex((image) => image.id === id);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    router.back();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
  }

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-30 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
