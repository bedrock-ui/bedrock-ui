import React from 'react';
import clsx from 'clsx';

import type { Props } from './Checkbox.types';

function Checkbox({
  checked = false,
  className,
  error = false,
  onChange,
  success = false,
  ...props
}: Props) {
  return (
    <div className="checkbox-container">
      <input
        {...props}
        checked={checked}
        className="checkbox-input"
        readOnly
        type="checkbox"
        tabIndex={-1}
      />

      <span
        className={clsx('checkbox', { checked, error, success }, className)}
        onClick={() => onChange(!checked)}
        tabIndex={0}
      >
        {checked && (
          <svg className={clsx('check-icon', { error, success })} viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        )}
      </span>
    </div>
  );
}

export default Checkbox;
