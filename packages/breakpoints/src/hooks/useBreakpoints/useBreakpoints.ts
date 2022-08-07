import { useContext } from 'react';
import { BreakpointsContext } from 'contexts/breakpoints';

function useBreakpoints() {
  const { matches, sx } = useContext(BreakpointsContext);

  return { matches, sx };
}

export default useBreakpoints;
