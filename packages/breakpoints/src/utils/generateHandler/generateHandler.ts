import type { BreakpointMatches, Breakpoints } from 'types/breakpoints';

interface GenerateHandlerOptions {
  breakpointKey: string;
  breakpoints: Breakpoints;
  setMatches: (matches: BreakpointMatches) => void;
}

function mapValues(breakpoints: Breakpoints): BreakpointMatches {
  const mappedValues: BreakpointMatches = {};

  Object.keys(breakpoints).forEach((breakpoint) => {
    mappedValues[breakpoint] = false;
  });

  return mappedValues;
}

function generateHandler({
  breakpointKey,
  breakpoints,
  setMatches,
}: GenerateHandlerOptions) {
  return function handleChange(event: MediaQueryListEvent) {
    if (event.matches) {
      setMatches({
        ...mapValues(breakpoints),
        [breakpointKey]: true,
      });
    }
  };
}

export default generateHandler;
