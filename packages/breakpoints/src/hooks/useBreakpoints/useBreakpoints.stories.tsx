import React from 'react';
import useBreakpoints from './useBreakpoints';

export default {
  title: 'useBreakpoints',
  argTypes: {},
  args: {},
};

export const Breakpoints = () => {
  const { matches } = useBreakpoints();

  return (
    <pre style={{ fontFamily: 'Roboto', fontSize: 24 }}>
      {JSON.stringify(matches, null, 4)}
    </pre>
  );
};
