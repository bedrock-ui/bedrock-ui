import type { MaybeBreakpointObject } from '@pkg/types/breakpoints';
import type { Hr } from '@pkg/types/elements';

export interface Props extends Hr {
  light?: boolean;
  variant?: MaybeBreakpointObject<'dashed' | 'dotted' | 'solid'>;
}
