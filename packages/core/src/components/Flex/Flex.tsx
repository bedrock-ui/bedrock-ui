import clsx from 'clsx';
import React from 'react';
import { useSpacing } from 'hooks/useSpacing';

import type { Props } from './Flex.types';

function Flex({
  className,
  flexDirection,
  justifyContent,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  style,
  ...props
}: Props) {
  const styles = useSpacing({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
  });

  return (
    <div
      {...props}
      className={clsx('flex', className, {
        [`flex-direction-${flexDirection}`]: flexDirection !== undefined,
        [`justify-content-${justifyContent}`]: justifyContent !== undefined,
      })}
      style={{ ...styles, ...style }}
    />
  );
}

export default Flex;
