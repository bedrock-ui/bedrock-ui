import type { Div } from '@pkg/types/elements';

export interface Props extends Div {
  color?: 'error' | 'info' | 'neutral' | 'none' | 'primary' | 'success' | 'warning';
  disabled?: boolean;
}
