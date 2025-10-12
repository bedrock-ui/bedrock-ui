import type { Div } from '@pkg/types/elements';

export interface Props extends Div {
  severity: 'error' | 'info' | 'success' | 'warning';
  variant?: 'filled' | 'light' | 'outlined';
}
