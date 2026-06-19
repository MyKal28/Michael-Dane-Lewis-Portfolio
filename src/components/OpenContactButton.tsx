'use client';

import type { ReactNode } from 'react';
import { useContactModal } from '@/components/ContactModalProvider';

interface OpenContactButtonProps {
  children: ReactNode;
  className?: string;
}

export default function OpenContactButton({ children, className }: OpenContactButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
