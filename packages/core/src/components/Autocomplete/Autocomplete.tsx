import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';

import type { OptionProps, Props } from './Autocomplete.types';

function Autocomplete({
  children,
  className,
  error = false,
  inputValue,
  onInputChange,
  rightIcon,
  success = false,
  ...props
}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, open, () => setOpen(false));

  return (
    <div {...props} className="autocomplete" ref={ref}>
      <div
        className={clsx('input-container', { error, success }, className)}
        onClick={() => setOpen(!open)}
      >
        <input type="text" onChange={onInputChange} tabIndex={0} value={inputValue} />

        {!!rightIcon && <div className="right-icon">{rightIcon}</div>}
      </div>

      <div className={clsx('menu', { open })} onClick={() => setOpen(false)}>
        {children}
      </div>
    </div>
  );
}

function Option({ className, selected = false, ...props }: OptionProps) {
  return <div {...props} className={clsx('option', { selected }, className)} tabIndex={0} />;
}

Autocomplete.Option = Option;

export default Autocomplete;
