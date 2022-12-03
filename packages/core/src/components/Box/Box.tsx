import clsx from 'clsx';
import React from 'react';

import type { Props } from './Box.types';

function Box({ className, ...props }: Props) {
  return <div {...props} className={clsx('box', className)} />;
}

export default Box;
