import React from 'react';
import { Spacing } from '../Spacing';
import BedrockSkeleton from './Skeleton';

import type { LineProps } from './Skeleton.types';

export default {
  title: 'SkeletonLine',
  component: BedrockSkeleton,
  argTypes: {
    animated: {
      type: 'boolean',
    },
    h: {
      type: 'number',
      defaultValue: 4,
    },
  },
};

export const SkeletonLine = (props: LineProps) => <BedrockSkeleton.Line {...props} />;
