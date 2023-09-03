import React from 'react';
import clsx from 'clsx';

import type { Props } from './Card.types';

function Card({ className, flat = false, noPadding = false, ...props }: Props) {
  return (
    <div {...props} className={clsx('card', { flat, ['no-padding']: noPadding }, className)} />
  );
}

export default Card;
