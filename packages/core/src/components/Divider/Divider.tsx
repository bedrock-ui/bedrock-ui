import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Divider.types';

function Divider({ className, variant = 'solid', ...props }: Props) {
  return <div {...props} className={clsx('divider', breakpoints(variant), className)} />;
}

export default Divider;
