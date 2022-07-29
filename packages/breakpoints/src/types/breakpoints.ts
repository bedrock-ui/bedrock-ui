export type BreakpointMatches = Record<string, boolean>;

export interface BreakpointMediaQuery {
  breakpointKey: string;
  mediaQuery: MediaQueryList | undefined;
}

export type Breakpoints = Record<string, number>;
