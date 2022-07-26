import React from 'react';
import clsx from 'clsx';

import type { Props } from './Card.types';

function Card({ className, ...props }: Props) {
  return <div {...props} className={clsx('card', className)} />;
}

export default Card;
