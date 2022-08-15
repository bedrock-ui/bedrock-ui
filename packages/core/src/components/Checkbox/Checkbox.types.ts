import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Input } from 'types/elements';

export interface Props extends Omit<Input, 'onChange'> {
  onChange: (checked: boolean) => void;
  error?: boolean;
  success?: boolean;
}
