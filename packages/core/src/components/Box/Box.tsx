import clsx from 'clsx';
import React from 'react';
import { useSpacing } from 'hooks/useSpacing';

import type { Props } from './Box.types';

function Box({
  className,
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

  return <div {...props} className={clsx('box', className)} style={{ ...styles, ...style }} />;
}

export default Box;
