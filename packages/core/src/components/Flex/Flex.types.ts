import type { Div } from 'types/elements';

type FlexDirection = 'column' | 'column-reverse' | 'row-reverse';

type JustifyContent =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'left'
  | 'flex-start'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

export interface Props extends Div {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
}
