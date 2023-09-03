import clsx from 'clsx';
import React from 'react';

import type { Props } from './Spacing.types';

function Spacing({ className, h, w, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        'spacing',
        {
          [`h-${h}`]: h !== undefined,
          [`w-${w}`]: w !== undefined,
        },
        className,
      )}
    />
  );
}

export default Spacing;
