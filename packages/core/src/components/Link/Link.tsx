import React from 'react';
import clsx from 'clsx';

import type { Props } from './Link.types';

function Link({ className, ...props }: Props) {
  return <a {...props} className={clsx('link', className)} />;
}

export default Link;
