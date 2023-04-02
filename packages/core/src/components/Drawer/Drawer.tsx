import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';

import type { Props } from './Drawer.types';

function Drawer({ className, onClose, open = false, position = 'left', ...props }: Props) {
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
      <div {...props} className={clsx('drawer', position, { open }, className)} ref={ref} />
      <div className={clsx('drawer-overlay', { open })} />
    </>
  );
}

export default Drawer;
