import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

export interface Props extends Div {
  onClose?: () => void;
  noPadding?: boolean;
  open?: boolean;
}
