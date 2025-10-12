import type { Div } from '@pkg/types/elements';

export interface Props extends Omit<Div, 'children'> {
  text: string;
  highlight: Array<string> | string;
}
