import { useMemo } from 'react';
import { spacing } from 'utils/spacing';

import type { Spacing } from 'types/spacing';

function useSpacing(spacingProps: Spacing) {
  return useMemo(() => spacing(spacingProps), [spacingProps]);
}

export default useSpacing;
