import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Modal.types';

function Modal({
  className,
  fullScreen,
  noPadding = false,
  onClose,
  open = false,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, open, () => {
    if (onClose) {
      onClose();
    }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'scroll';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [open]);

  return (
    <>
      <div
        {...props}
        className={clsx(
          'modal',
          breakpoints(fullScreen, { prefix: 'full-screen-' }),
          {
            'no-padding': noPadding,
            open,
          },
          className,
        )}
        ref={ref}
      />
      <div className={clsx('modal-overlay', { open })} />
    </>
  );
}

export default Modal;
