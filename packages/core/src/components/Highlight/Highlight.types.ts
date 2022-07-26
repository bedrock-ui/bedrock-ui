import type { Div } from 'types/elements';

export interface Props extends Div {
  children: string;
  highlight: Array<string> | string;
}
