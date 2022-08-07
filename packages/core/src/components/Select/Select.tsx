import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';

import type { OptionProps, Props } from './Select.types';

function Select({
  children,
  className,
  error = false,
  rightIcon,
  selectedLabel = '',
  success = false,
  ...props
}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, open, () => setOpen(false));

  return (
    <div {...props} className="select" ref={ref}>
      <div
        className={clsx('input', className, { error, success })}
        onClick={() => setOpen(!open)}
        tabIndex={0}
      >
        {selectedLabel}

        {!!rightIcon && <div className="right-icon">{rightIcon}</div>}
      </div>

      <div className={clsx('menu', { open })} onClick={() => setOpen(false)}>
        {children}
      </div>
    </div>
  );
}

function Option({ className, selected = false, ...props }: OptionProps) {
  return <div {...props} className={clsx('option', className, { selected })} tabIndex={0} />;
}

Select.Option = Option;

export default Select;
