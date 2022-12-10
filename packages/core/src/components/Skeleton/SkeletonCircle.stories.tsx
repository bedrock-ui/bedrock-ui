import React from 'react';
import BedrockSkeleton from './Skeleton';

import type { CircleProps } from './Skeleton.types';

export default {
  title: 'SkeletonCircle',
  component: BedrockSkeleton,
  argTypes: {
    animated: {
      type: 'boolean',
    },
  },
};

export const SkeletonCircle = (props: CircleProps) => <BedrockSkeleton.Circle {...props} />;
