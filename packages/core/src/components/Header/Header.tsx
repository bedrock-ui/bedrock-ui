import clsx from 'clsx';
import React from 'react';

import type { Props } from './Header.types';

function Header({ className, flat = false, position, ...props }: Props) {
  return <header {...props} className={clsx('header', className, position, { flat })} />;
}

export default Header;
