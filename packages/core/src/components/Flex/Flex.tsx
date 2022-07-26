import React from 'react';
import clsx from 'clsx';

import type { Props } from './Flex.types';

function Flex({ className, flexDirection, justifyContent, ...props }: Props) {
  return (
    <div
      {...props}
      className={clsx('flex', className, {
        [`flex-direction-${flexDirection}`]: flexDirection !== undefined,
        [`justify-content-${justifyContent}`]: justifyContent !== undefined,
      })}
    />
  );
}

export default Flex;
