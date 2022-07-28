import { useContext } from 'react';
import { BreakpointsContext } from 'contexts/breakpoints';

function useBreakpointValues() {
  const { breakpoints } = useContext(BreakpointsContext);

  return breakpoints;
}

export default useBreakpointValues;
