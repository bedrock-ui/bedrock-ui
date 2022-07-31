import React, { useMemo } from 'react';
import clsx from 'clsx';

import type { Props } from './Highlight.types';

function Highlight({ className, children, highlight, ...props }: Props) {
  const fragments = useMemo(
    () =>
      children.split(/(\s+)/).map((text) => ({
        text,
        match: Array.isArray(highlight) ? highlight.includes(text) : highlight === text,
      })),
    [children, highlight]
  );

  return (
    <div {...props} className={clsx('highlight', className)}>
      {fragments.map(({ text, match }) => {
        if (match) {
          return <mark>{text}</mark>;
        }

        return <span>{text}</span>;
      })}
    </div>
  );
}

export default Highlight;
