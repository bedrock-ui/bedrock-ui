import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type HtmlHeading = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export interface Props extends HtmlHeading {
  color?: 'default' | 'primary' | 'white';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
