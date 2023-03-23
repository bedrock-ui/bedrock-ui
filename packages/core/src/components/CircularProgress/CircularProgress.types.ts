import type { Div } from 'types/elements';

export interface Props extends Div {
  color?: 'primary' | 'white';
  size?: 'sm' | 'md' | 'lg';
}
