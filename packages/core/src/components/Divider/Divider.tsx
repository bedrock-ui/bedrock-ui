import React from 'react';
import clsx from 'clsx';

import type { Props } from './Divider.types';

function Divider({ className, variant, ...props }: Props) {
  return <div {...props} className={clsx('divider', variant, className)} />;
}

export default Divider;
