import type { MaybeBreakpointObject } from 'types/breakpoints';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  square?: boolean;
  variant?: MaybeBreakpointObject<'contained' | 'outlined' | 'text'>;
}
