import type { BreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

export interface Props extends Div {
  on: BreakpointObject<boolean>;
}
