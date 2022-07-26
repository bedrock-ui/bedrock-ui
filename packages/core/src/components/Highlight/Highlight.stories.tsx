import React from 'react';
import { Text } from '../Text';
import BedrockHighlight from './Highlight';

import type { Props } from './Highlight.types';

export default {
  title: 'Highlight',
  component: BedrockHighlight,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    highlight: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'A walk in the park',
    highlight: 'walk',
  },
};

export const Highlight = (props: Props) => (
  <Text>
    <BedrockHighlight {...props} />
  </Text>
);
