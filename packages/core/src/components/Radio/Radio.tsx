import React from 'react';
import clsx from 'clsx';

import type { Props } from './Radio.types';

function Radio({
  checked = false,
  className,
  error = false,
  onChange,
  success = false,
  ...props
}: Props) {
  return (
    <div className="radio-container">
      <input
        {...props}
        checked={checked}
        className="radio-input"
        readOnly
        type="radio"
        tabIndex={-1}
      />

      <span
        className={clsx('radio', { checked, error, success }, className)}
        onClick={() => onChange(!checked)}
        tabIndex={0}
      />
    </div>
  );
}

export default Radio;
