import React from 'react';
import { Text } from 'components/Text';
import BedrockHighlight from './Highlight';

import type { Props } from './Highlight.types';

export default {
  title: 'Highlight',
  component: BedrockHighlight,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    highlight: {
      control: { type: 'text' },
    },
  },
  args: {
    text: 'A walk in the park',
    highlight: 'walk',
  },
};

export const Highlight = (props: Props) => (
  <Text>
    <BedrockHighlight {...props} />
  </Text>
);
