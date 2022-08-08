import type { BreakpointMatches } from 'types/breakpoints';

function responsiveValues<T>(
  matches: BreakpointMatches,
  responsiveValues: Record<string, T>
): T {
  const key = Object.keys(matches).find((match) => matches[match]) as string;
  return responsiveValues[key];
}

export default responsiveValues;
