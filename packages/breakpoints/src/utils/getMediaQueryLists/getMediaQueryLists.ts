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
        mediaQuery: window.matchMedia(`(min-width: ${minWidth}px)`),
      };
    }

    const maxWidth = breakpoints[breakpointKeys[index + 1]] - 1;

    return {
      breakpointKey: key,
      mediaQuery: window.matchMedia(
        `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`
      ),
    };
  });
}

export default getMediaQueryLists;
