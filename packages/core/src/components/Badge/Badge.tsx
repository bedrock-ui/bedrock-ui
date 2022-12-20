import clsx from 'clsx';
import React from 'react';

import type { Props } from './Badge.types';

function Badge({ className, color = 'primary', variant = 'light', ...props }: Props) {
  return <div {...props} className={clsx('badge', className, color, variant)} />;
}

export default Badge;
