import clsx from 'clsx';
import React from 'react';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Flex.types';

function Flex({
  className,
  alignItems,
  flexDirection,
  fullWidth = false,
  justifyContent,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={clsx(
        'flex',
        { 'full-width': fullWidth },
        breakpoints(alignItems, { prefix: 'align-items-' }),
        breakpoints(flexDirection, { prefix: 'flex-direction-' }),
        breakpoints(justifyContent, { prefix: 'justify-content-' }),
        className,
      )}
    />
  );
}

export default Flex;
