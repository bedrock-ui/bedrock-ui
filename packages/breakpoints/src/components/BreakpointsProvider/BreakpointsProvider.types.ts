import type { ReactNode } from 'react';
import type { Breakpoints } from 'types/breakpoints';

export interface Props {
  breakpoints: Breakpoints;
  children: ReactNode;
}
