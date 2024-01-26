'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div className="modal-backdrop">{children}</div>,
    document.getElementById('modal-root')!,
  );
}
