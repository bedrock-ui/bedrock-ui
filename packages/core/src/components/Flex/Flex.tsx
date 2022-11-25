import clsx from 'clsx';
import React from 'react';
import { useSpacing } from 'hooks/useSpacing';
import { breakpoints } from 'utils/breakpoints';

import type { Props } from './Flex.types';

function Flex({
  className,
  alignItems = 'normal',
  flexDirection = 'row',
  fullWidth = false,
  justifyContent = 'normal',
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
      className={clsx(
        'flex',
        className,
        { 'full-width': fullWidth },
        breakpoints(alignItems, { prefix: 'align-items-' }),
        breakpoints(flexDirection, { prefix: 'flex-direction-' }),
        breakpoints(justifyContent, { prefix: 'justify-content-' })
      )}
      style={{ ...styles, ...style }}
    />
  );
}

export default Flex;
