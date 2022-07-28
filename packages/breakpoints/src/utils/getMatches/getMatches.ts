import type {
  BreakpointMatches,
  BreakpointMediaQuery,
} from 'types/breakpoints';

function getMatches(
  mediaQueryLists: Array<BreakpointMediaQuery>
): BreakpointMatches {
  return mediaQueryLists.reduce<BreakpointMatches>(
    (matches, { breakpointKey, mediaQuery }) => {
      matches[breakpointKey] = mediaQuery.matches;

      return matches;
    },
    {}
  );
}

export default getMatches;
