import React from 'react';
import clsx from 'clsx';

import type { Props, ColProps } from './Grid.types';

function Grid({ className, ...props }: Props) {
  return <div {...props} className={clsx('grid', className)} />;
}

function GridCol({ className, span, ...props }: ColProps) {
  return <div {...props} className={clsx('grid-item', `col-${span}`)} />;
}

Grid.Col = GridCol;

export default Grid;
