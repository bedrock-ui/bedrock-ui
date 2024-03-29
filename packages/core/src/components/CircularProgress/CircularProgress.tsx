import React from 'react';
import { clsx } from 'clsx';

import type { Props } from './CircularProgress.types';

function CircularProgress({ className, color, size = 'md' }: Props) {
  return (
    <div className={clsx('circular-progress', color, size, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default CircularProgress;
