import React from 'react';
import clsx from 'clsx';

import type { Props } from './Text.types';

function Text({ className, color, ...props }: Props) {
  return <div {...props} className={clsx('text', color, className)} />;
}

export default Text;
