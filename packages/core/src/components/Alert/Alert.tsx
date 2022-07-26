import React from 'react';
import clsx from 'clsx';

import type { Props } from './Alert.types';

function Alert({ className, severity, variant = 'light', ...props }: Props) {
  return <div {...props} className={clsx('alert', severity, variant, className)} />;
}

export default Alert;
