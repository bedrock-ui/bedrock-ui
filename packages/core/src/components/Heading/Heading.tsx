import React, { createElement } from 'react';
import clsx from 'clsx';

import type { Props } from './Heading.types';

const headings = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

function Heading({ className, level = 1, ...props }: Props) {
  return createElement(
    headings[level],
    {
      ...props,
      className: clsx('heading', className),
    },
    props.children
  );
}

export default Heading;
