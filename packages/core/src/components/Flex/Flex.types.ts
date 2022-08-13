import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';
import type { Spacing } from 'types/spacing';

type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type JustifyContent =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'left'
  | 'normal'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

export interface Props extends Div, Spacing {
  flexDirection?: MaybeBreakpointObject<FlexDirection>;
  justifyContent?: MaybeBreakpointObject<JustifyContent>;
}
