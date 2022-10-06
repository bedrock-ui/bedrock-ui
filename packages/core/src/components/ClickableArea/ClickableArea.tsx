import clsx from 'clsx';
import React from 'react';

import type { Props } from './ClickableArea.types';

function ClickableArea({ className, ...props }: Props) {
  return <div {...props} className={clsx('clickable-area', className)} tabIndex={0} />;
}

export default ClickableArea;
