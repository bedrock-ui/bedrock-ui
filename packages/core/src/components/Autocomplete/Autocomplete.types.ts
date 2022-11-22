import type { ReactNode } from 'react';
import type { Div, Input } from 'types/elements';

export interface OptionProps extends Div {
  selected?: boolean;
}

export interface Props extends Div {
  error?: boolean;
  inputValue: string;
  onInputChange: Input['onChange'];
  rightIcon?: ReactNode;
  success?: boolean;
}
