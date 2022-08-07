import React, { useEffect, useMemo, useState } from 'react';
import { BreakpointsContext } from 'contexts/breakpoints';
import { generateHandler } from 'utils/generateHandler';
import { getMatches } from 'utils/getMatches';
import { getMediaQueryLists } from 'utils/getMediaQueryLists';
import { responsiveValues } from 'utils/responsiveValues';

import type { BreakpointMatches } from 'types/breakpoints';
import type { Props } from './BreakpointsProvider.types';

function BreakpointsProvider({
  breakpoints: breakpointsProp,
  children,
}: Props) {
  const [breakpoints] = useState(breakpointsProp);

  const mediaQueryLists = useMemo(
    () => getMediaQueryLists(breakpoints),
    [breakpoints]
  );

  const [matches, setMatches] = useState<BreakpointMatches>(
    getMatches(mediaQueryLists)
  );

  const sx = useMemo(() => {
    return function <T>(values: Record<string, T>) {
      return responsiveValues<T>(matches, values);
    };
  }, [matches]);

  useEffect(() => {
    mediaQueryLists.forEach(({ breakpointKey, mediaQuery }) => {
      if (mediaQuery) {
        mediaQuery.addEventListener(
          'change',
          generateHandler({ breakpointKey, breakpoints, setMatches })
        );
      }
    });

    return () => {
      mediaQueryLists.forEach(({ breakpointKey, mediaQuery }) => {
        if (mediaQuery) {
          mediaQuery.addEventListener(
            'change',
            generateHandler({ breakpointKey, breakpoints, setMatches })
          );
        }
      });
    };
  }, [breakpoints, mediaQueryLists, setMatches]);

  return (
    <BreakpointsContext.Provider
      value={{ breakpoints, matches, mediaQueryLists, setMatches, sx }}
    >
      {children}
    </BreakpointsContext.Provider>
  );
}

export default BreakpointsProvider;
