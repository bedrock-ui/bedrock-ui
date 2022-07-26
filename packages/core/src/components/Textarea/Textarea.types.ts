import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type Textarea = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface Props extends Textarea {
  error?: boolean;
  success?: boolean;
}
