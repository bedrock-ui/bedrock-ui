import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Hr } from 'types/elements';

export interface Props extends Hr {
  variant?: MaybeBreakpointObject<'dashed' | 'dotted' | 'solid'>;
}
