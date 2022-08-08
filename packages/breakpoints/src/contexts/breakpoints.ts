import { createContext } from 'react';
import { responsiveValues } from 'utils/responsiveValues';

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
  sx: <T>(values: Record<string, T>) => T;
}

const DEFAULT_BREAKPOINTS = {
  mobile: 0,
  tablet: 600,
  desktop: 1024,
};

const DEFAULT_MATCHES = {
  mobile: false,
  tablet: false,
  desktop: false,
};

const BreakpointsContext = createContext<IBreakpointsContext>({
  breakpoints: DEFAULT_BREAKPOINTS,
  matches: DEFAULT_MATCHES,
  mediaQueryLists: [],
  setMatches: () => {},
  sx: (values) => responsiveValues(DEFAULT_MATCHES, values),
});

export { BreakpointsContext };
