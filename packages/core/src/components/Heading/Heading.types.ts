import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { MaybeBreakpointObject } from 'types/breakpoints';

type HtmlHeading = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export interface Props extends Omit<HtmlHeading, 'color'> {
  bold?: boolean;
  color?: MaybeBreakpointObject<'default' | 'primary' | 'white'>;
  /**
   * Specify a custom font size in pixels to override the default level based size
   */
  fontSize?: number | string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Specify a custom line height in pixels to override the default level based height
   */
  lineHeight?: number | string;
}
