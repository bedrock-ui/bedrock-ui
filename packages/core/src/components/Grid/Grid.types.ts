import type { MaybeBreakpointObject } from 'types/breakpoints';
import type { Div } from 'types/elements';

type GridGaps = MaybeBreakpointObject<
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
>;

export interface ColProps extends Div {
  span: MaybeBreakpointObject<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
}

export type Props = (GapProps | ColumnAndRowGapProps) & Div;

interface GapProps {
  gap: GridGaps;
  columnGap?: never;
  rowGap?: never;
}

interface ColumnAndRowGapProps {
  gap?: never;
  columnGap: GridGaps;
  rowGap: GridGaps;
}
