import React from 'react';
import { renderHook } from '@testing-library/react';
import { BreakpointsProvider } from 'components/BreakpointsProvider';
import useBreakpointValues from './useBreakpointValues';

import type { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('useBreakpointValues', () => {
  const breakpoints = {
    mobile: 0,
    tablet: 600,
    desktop: 1024,
  };

  const wrapper = (props: WrapperProps) => (
    <BreakpointsProvider {...props} breakpoints={breakpoints} />
  );

  test('breakpoints', () => {
    const { result } = renderHook(() => useBreakpointValues(), { wrapper });
    expect(result.current).toEqual(breakpoints);
  });
});
