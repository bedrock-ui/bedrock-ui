import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { MaybeBreakpointObject } from 'types/breakpoints';

type HtmlHeading = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export interface Props extends Omit<HtmlHeading, 'color'> {
  color?: MaybeBreakpointObject<'default' | 'primary' | 'white'>;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
