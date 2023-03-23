import React from 'react';
import { Button } from 'components/Button';
import { Spacing } from 'components/Spacing';
import BedrockCircularProgress from './CircularProgress';

import type { Props } from './CircularProgress.types';

export default {
  title: 'CircularProgress',
  component: BedrockCircularProgress,
  argTypes: {},
  args: {},
};

export const CircularProgress = (props: Props) => <BedrockCircularProgress {...props} />;

export const CircularProgressButton = (props: Props) => (
  <Button>
    <BedrockCircularProgress {...props} color="white" size="sm" />
    <Spacing w={3} />
    Please Wait
  </Button>
);
