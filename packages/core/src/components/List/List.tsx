import React from 'react';
import clsx from 'clsx';

import type { ListItemProps, Props } from './List.types';

function List({ className, ...props }: Props) {
  return <ul {...props} className={clsx('list', className)} />;
}

function Item({ className, ...props }: ListItemProps) {
  return <li {...props} className={clsx('list-item', className)} />;
}

List.Item = Item;

export default List;
