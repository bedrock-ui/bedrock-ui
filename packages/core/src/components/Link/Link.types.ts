import type { AnchorHTMLAttributes, DetailedHTMLProps, ElementType } from 'react';

type Anchor = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface Props extends Anchor {
  component?: ElementType;
  underline?: boolean;
}
