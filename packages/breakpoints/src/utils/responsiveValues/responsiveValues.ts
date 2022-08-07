import type { BreakpointMatches } from 'types/breakpoints';

function responsiveValues<T>(
  matches: BreakpointMatches,
  responsiveValues: Record<string, T>
): T | undefined {
  const key = Object.keys(matches).find((match) => matches[match]);

  if (!key) {
    return undefined;
  }

  return responsiveValues[key];
}

export default responsiveValues;
