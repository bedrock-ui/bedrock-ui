import React from 'react';
import clsx from 'clsx';

import type { Props } from './Link.types';

function Link({ className, underline = 'none', ...props }: Props) {
  return (
    <a
      {...props}
      className={clsx('link', className, {
        'underline-hover': underline === 'hover',
        underline: underline === 'underline',
      })}
    />
  );
}

export default Link;
