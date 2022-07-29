import type { BreakpointMediaQuery, Breakpoints } from 'types/breakpoints';

function getMediaQueryLists(
  breakpoints: Breakpoints
): Array<BreakpointMediaQuery> {
  const breakpointKeys = Object.keys(breakpoints);

  return breakpointKeys.map((key, index) => {
    const minWidth = breakpoints[key];

    if (index === breakpointKeys.length - 1) {
      return {
        breakpointKey: key,
        mediaQuery: mediaQuery(`(min-width: ${minWidth}px)`),
      };
    }

    const maxWidth = breakpoints[breakpointKeys[index + 1]] - 1;

    return {
      breakpointKey: key,
      mediaQuery: mediaQuery(
        `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`
      ),
    };
  });
}

function mediaQuery(query: string): MediaQueryList | undefined {
  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query);
  }

  return undefined;
}

export default getMediaQueryLists;
