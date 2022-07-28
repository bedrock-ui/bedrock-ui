import { createContext } from 'react';

import type {
  BreakpointMatches,
  BreakpointMediaQuery,
  Breakpoints,
} from 'types/breakpoints';

interface IBreakpointsContext {
  breakpoints: Breakpoints;
  matches: BreakpointMatches;
  mediaQueryLists: Array<BreakpointMediaQuery>;
  setMatches: (matches: BreakpointMatches) => void;
}

const BreakpointsContext = createContext<IBreakpointsContext>({
  breakpoints: {},
  matches: {},
  mediaQueryLists: [],
  setMatches: () => {},
});

export { BreakpointsContext };
