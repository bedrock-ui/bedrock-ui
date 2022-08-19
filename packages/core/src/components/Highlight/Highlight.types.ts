import type { Div } from 'types/elements';

export interface Props extends Omit<Div, "children"> {
  text: string;
  highlight: Array<string> | string;
}