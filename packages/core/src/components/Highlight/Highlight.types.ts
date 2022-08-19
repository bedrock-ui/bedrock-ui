import type { Div } from 'types/elements';

export interface Props extends Div {
  text: string;
  highlight: Array<string> | string;
}
