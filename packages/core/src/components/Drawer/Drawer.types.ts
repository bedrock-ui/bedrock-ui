import type { Div } from 'types/elements';

export interface Props extends Div {
  open?: boolean;
  onClose?: () => void;
  position?: 'left' | 'right';
}
