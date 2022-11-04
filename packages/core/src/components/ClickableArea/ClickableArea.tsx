import clsx from 'clsx';
import React from 'react';

import type { Props } from './ClickableArea.types';

function ClickableArea({ className, color = 'primary', ...props }: Props) {
  return <div {...props} className={clsx('clickable-area', className, color)} tabIndex={0} />;
}

export default ClickableArea;
