import clsx from 'clsx';
import React from 'react';

import type { Props } from './ClickableArea.types';

function ClickableArea({ className, color, disabled = false, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        'clickable-area',
        {
          color: color !== undefined,
          disabled,
        },
        className
      )}
      tabIndex={0}
    />
  );
}

export default ClickableArea;
