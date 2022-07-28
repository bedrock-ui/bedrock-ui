import { useContext } from 'react';
import { BreakpointsContext } from 'contexts/breakpoints';

function useBreakpoints() {
  const { matches } = useContext(BreakpointsContext);

  return matches;
}

export default useBreakpoints;
