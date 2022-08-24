import React from 'react';
import clsx from 'clsx';
import { Props } from './Switch.types';

function Switch({ checked = false, size = 'medium', onChange }: Props) {
  return (
    <div className="switch-container">
      <input className="switch" type={'checkbox'} />
    </div>
  );
}

export default Switch;
