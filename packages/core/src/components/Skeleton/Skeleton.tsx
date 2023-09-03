import clsx from 'clsx';
import React from 'react';

import type { CircleProps, LineProps } from './Skeleton.types';

function Circle({ animated = false, className, ...props }: CircleProps) {
  return <div {...props} className={clsx('skeleton circle', { animated }, className)} />;
}

function Line({ animated = false, className, h, ...props }: LineProps) {
  return (
    <div
      {...props}
      className={clsx(
        'skeleton line',
        {
          animated,
          [`h-${h}`]: h !== undefined,
        },
        className,
      )}
    />
  );
}

const Skeleton = {
  Circle,
  Line,
} as const;

export default Skeleton;
