import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

export interface Props extends Div {
  on: MaybeBreakpointObject<boolean>;
}
