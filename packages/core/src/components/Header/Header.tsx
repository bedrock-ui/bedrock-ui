import clsx from 'clsx';
import React from 'react';

import type { Props } from './Header.types';

function Header({ className, position, ...props }: Props) {
  return <header {...props} className={clsx('header', className, position)} />;
}

export default Header;
