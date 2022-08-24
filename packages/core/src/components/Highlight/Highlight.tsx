import React, { useMemo } from 'react';
import clsx from 'clsx';

import type { Props } from './Highlight.types';

function Highlight({ className, text, highlight, ...props }: Props) {
  const fragments = useMemo(
    () =>
      text.split(/(\s+)/).map((word) => ({
        word,
        match: Array.isArray(highlight) ? highlight.includes(word) : highlight === word,
      })),
    [text, highlight]
  );

  return (
    <div {...props} className={clsx('highlight', className)}>
      {fragments.map(({ word, match }) => {
        if (match) {
          return <mark>{word}</mark>;
        }

        return <span>{word}</span>;
      })}
    </div>
  );
}

export default Highlight;
