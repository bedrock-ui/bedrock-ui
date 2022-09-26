import React from 'react';
import clsx from 'clsx';

import type { Props } from './Link.types';

function Link({ className, underline = false, ...props }: Props) {
  return <a {...props} className={clsx('link', className, { underline })} />;
}

export default Link;
