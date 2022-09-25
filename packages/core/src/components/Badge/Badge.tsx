import clsx from 'clsx';
import React from 'react';

import type { Props } from './Badge.types';

function Badge({ className, color = 'primary', ...props }: Props) {
  return <div {...props} className={clsx('badge', className, color)} />;
}

export default Badge;
