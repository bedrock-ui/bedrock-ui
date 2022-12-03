import React from 'react';
import { Spacing } from '../Spacing';
import BedrockSkeleton from './Skeleton';

import type { Props } from './Skeleton.types';

export default {
  title: 'Skeleton',
  component: BedrockSkeleton,
  argTypes: {
    animated: {
      type: 'boolean',
    },
  },
};

export const Skeleton = (props: Props) => (
  <>
    <BedrockSkeleton.Circle {...props} />

    <Spacing h={2} />

    <BedrockSkeleton.Line {...props} />
  </>
);
