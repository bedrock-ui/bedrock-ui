import mapValues from 'lodash/mapValues';

import type { BreakpointMatches, Breakpoints } from 'types/breakpoints';

interface GenerateHandlerOptions {
  breakpointKey: string;
  breakpoints: Breakpoints;
  setMatches: (matches: BreakpointMatches) => void;
}

function generateHandler({
  breakpointKey,
  breakpoints,
  setMatches,
}: GenerateHandlerOptions) {
  return function handleChange(event: MediaQueryListEvent) {
    if (event.matches) {
      setMatches(
        mapValues({
          ...mapValues(breakpoints, () => false),
          [breakpointKey]: true,
        })
      );
    }
  };
}

export default generateHandler;
