import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Text.types';

function Text({ className, color, ...props }: Props) {
  return <div {...props} className={clsx('text', breakpoints(color), className)} />;
}

export default Text;
