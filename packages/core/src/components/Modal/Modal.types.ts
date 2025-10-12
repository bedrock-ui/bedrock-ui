import type { MaybeBreakpointObject } from '@pkg/types/breakpoints';
import type { Div } from '@pkg/types/elements';

export interface Props extends Div {
  fullScreen?: MaybeBreakpointObject<boolean>;
  onClose?: () => void;
  noPadding?: boolean;
  open?: boolean;
}
