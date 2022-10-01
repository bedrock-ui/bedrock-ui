import clsx from 'clsx';
import React from 'react';

import type { Props } from './Switch.types';

function Switch({ checked, className, error, onChange, success, ...props }: Props) {
  return (
    <div className={clsx('switch', className, { checked, error, success })}>
      <input
        {...props}
        checked={checked}
        className="switch-input"
        readOnly
        type="checkbox"
        tabIndex={-1}
      />

      <div className="track" onClick={() => onChange(!checked)} tabIndex={0}>
        <div className="thumb" />
      </div>
    </div>
  );
}

export default Switch;
