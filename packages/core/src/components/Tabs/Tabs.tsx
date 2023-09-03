import React from 'react';
import clsx from 'clsx';

import type { Props, TabProps } from './Tabs.types';

function Tabs({ className, ...props }: Props) {
  return <div {...props} className={clsx('tabs', className)} />;
}

function Tab({ className, active = false, ...props }: TabProps) {
  return <div {...props} className={clsx('tab', { active }, className)} />;
}

Tabs.Tab = Tab;

export default Tabs;
