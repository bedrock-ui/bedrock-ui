import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Divider.types';

function Divider({ className, light = false, variant = 'solid', ...props }: Props) {
  return <div {...props} className={clsx('divider', breakpoints(variant), { light }, className)} />;
}

export default Divider;
