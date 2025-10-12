import type { Input } from '@pkg/types/elements';

export interface Props extends Omit<Input, 'onChange'> {
  onChange: (checked: boolean) => void;
  error?: boolean;
  success?: boolean;
}
