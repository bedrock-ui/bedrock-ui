import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';

import type { Props } from './Modal.types';

function Modal({ className, onClose, open = false, ...props }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, open, () => {
    if (onClose) {
      onClose();
    }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'scroll';
  }, [open]);

  return (
    <>
      <div {...props} className={clsx('modal', className, { open })} ref={ref} />
      <div className={clsx('modal-overlay', { open })} />
    </>
  );
}

export default Modal;
