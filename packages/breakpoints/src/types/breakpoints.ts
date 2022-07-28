export type BreakpointMatches = Record<string, boolean>;

export interface BreakpointMediaQuery {
  breakpointKey: string;
  mediaQuery: MediaQueryList;
}

export type Breakpoints = Record<string, number>;
