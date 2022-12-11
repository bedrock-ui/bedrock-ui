import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

export interface Props extends Omit<Div, 'color'> {
  bold?: boolean;
  color?: MaybeBreakpointObject<'default' | 'error' | 'neutral' | 'primary' | 'white'>;
}
