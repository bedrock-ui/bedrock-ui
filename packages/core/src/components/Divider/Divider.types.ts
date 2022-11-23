import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Hr } from 'types/elements';

export interface Props extends Hr {
  light?: boolean;
  variant?: MaybeBreakpointObject<'dashed' | 'dotted' | 'solid'>;
}
