import type { Div } from 'types/elements';

export interface OptionProps extends Div {
  selected?: boolean;
}

export interface Props extends Div {
  error?: boolean;
  selectedLabel?: string;
  success?: boolean;
}
