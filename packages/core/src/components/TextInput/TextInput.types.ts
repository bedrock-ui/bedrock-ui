import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Input = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface Props extends Input {
  error?: boolean;
  success?: boolean;
}
