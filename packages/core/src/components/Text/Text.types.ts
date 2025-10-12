import type { MaybeBreakpointObject } from '@pkg/types/breakpoints';
import type { Div } from '@pkg/types/elements';

export interface Props extends Omit<Div, 'color'> {
  bold?: boolean;
  color?: MaybeBreakpointObject<'default' | 'error' | 'neutral' | 'primary' | 'white'>;
}
