import clsx from 'clsx';
import React from 'react';
import { breakpoints } from '@pkg/utils/breakpoints';

import type { Props } from './Hidden.types';

function Hidden({ className, on, ...props }: Props) {
  return <div {...props} className={clsx('hidden', breakpoints(on), className)} />;
}

export default Hidden;
