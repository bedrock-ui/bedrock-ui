import React from 'react';
import useBreakpointValues from './useBreakpointValues';

export default {
  title: 'useBreakpointValues',
  argTypes: {},
  args: {},
};

export const Breakpoints = () => {
  const breakpoints = useBreakpointValues();

  return (
    <pre style={{ fontFamily: 'Roboto', fontSize: 24 }}>
      {JSON.stringify(breakpoints, null, 4)}
    </pre>
  );
};
