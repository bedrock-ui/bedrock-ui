import type { Div } from 'types/elements';

export interface Props extends Div {
  color?: 'error' | 'info' | 'neutral' | 'primary' | 'success' | 'warning';
  variant?: 'filled' | 'light';
}
