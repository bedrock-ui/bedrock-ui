import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props, ColProps } from './Grid.types';

function Grid({ className, ...props }: Props) {
  return <div {...props} className={clsx('grid', className)} />;
}

function GridCol({ className, span, ...props }: ColProps) {
  return <div {...props} className={clsx('grid-item', breakpoints(span, { prefix: 'col-' }))} />;
}

Grid.Col = GridCol;

export default Grid;
