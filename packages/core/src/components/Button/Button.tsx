import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Button.types';

function Button({ className, disabled, square = false, variant = 'contained', ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx('button', className, breakpoints(variant), { disabled, square })}
      disabled={disabled}
    />
  );
}

export default Button;
