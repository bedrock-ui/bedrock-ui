import type { Div } from 'types/elements';

export interface Props extends Div {
  onClose?: () => void;
  noPadding?: boolean;
  open?: boolean;
}
