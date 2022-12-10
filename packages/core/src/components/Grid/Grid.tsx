import React from 'react';
import clsx from 'clsx';
import { breakpoints } from 'utils/breakpoints';

import type { Props, ColProps } from './Grid.types';

function Grid({ className, gap, columnGap, rowGap, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx(
        'grid',
        className,
        breakpoints(gap, { prefix: 'gap-' }),
        breakpoints(columnGap, { prefix: 'column-gap-' }),
        breakpoints(rowGap, { prefix: 'row-gap-' })
      )}
    />
  );
}

function GridCol({ className, span, ...props }: ColProps) {
  return <div {...props} className={clsx('grid-item', breakpoints(span, { prefix: 'col-' }))} />;
}

Grid.Col = GridCol;

export default Grid;
