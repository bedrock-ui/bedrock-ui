import type { MaybeBreakpointObject } from '@pkg/types/breakpoints';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'neutral' | 'primary';
  square?: boolean;
  variant?: MaybeBreakpointObject<'contained' | 'outlined' | 'text'>;
}
