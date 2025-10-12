import type { BreakpointObject } from '@pkg/types/breakpoints';
import type { Div } from '@pkg/types/elements';

export interface Props extends Div {
  on: BreakpointObject<boolean>;
}
