import type { Div } from '@pkg/types/elements';

export interface Props extends Div {
  open?: boolean;
  onClose?: () => void;
  position?: 'left' | 'right';
}
