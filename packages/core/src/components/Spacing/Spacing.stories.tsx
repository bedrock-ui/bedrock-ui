import React from 'react';
import { Text } from 'components/Text';
import BedrockSpacing from './Spacing';

import type { Props } from './Spacing.types';

export default {
  title: 'Spacing',
  component: BedrockSpacing,
  argTypes: {},
};

export const Spacing = (props: Props) => (
  <>
    <Text>Item 1</Text>
    <BedrockSpacing {...props} />
    <Text>Item 2</Text>
  </>
);
