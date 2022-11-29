import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';
import type { Spacing } from 'types/spacing';

type AlignItems = 'center' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'start' | 'stretch';

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
  alignItems?: MaybeBreakpointObject<AlignItems>;
  flexDirection?: MaybeBreakpointObject<FlexDirection>;
  fullWidth?: boolean;
  justifyContent?: MaybeBreakpointObject<JustifyContent>;
}
