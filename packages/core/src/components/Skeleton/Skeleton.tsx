import clsx from 'clsx';
import React from 'react';

import type { Props } from './Skeleton.types';

function Circle({ animated = false, className, ...props }: Props) {
  return <div {...props} className={clsx('skeleton circle', className, { animated })} />;
}

function Line({ animated = false, className, ...props }: Props) {
  return <div {...props} className={clsx('skeleton line', className, { animated })} />;
}

const Skeleton = {
  Circle,
  Line,
} as const;

export default Skeleton;
