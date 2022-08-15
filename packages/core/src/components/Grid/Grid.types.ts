import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

export interface ColProps extends Div {
  span: MaybeBreakpointObject<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
}

export interface Props extends Div {}
