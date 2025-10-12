import React from 'react';
import { Flex } from '@pkg/components/Flex';
import { Text } from '@pkg/components/Text';
import BedrockClickableArea from './ClickableArea';

import type { Props } from './ClickableArea.types';

export default {
  title: 'ClickableArea',
  component: BedrockClickableArea,
  argTypes: {},
};

export const ClickableArea = (props: Props) => (
  <BedrockClickableArea {...props}>
    <Text>Clickable area</Text>
  </BedrockClickableArea>
);
