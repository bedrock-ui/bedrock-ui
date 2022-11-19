import React from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import BedrockClickableArea from './ClickableArea';

import type { Props } from './ClickableArea.types';

export default {
  title: 'ClickableArea',
  component: BedrockClickableArea,
  argTypes: {},
};

export const ClickableArea = (props: Props) => (
  <BedrockClickableArea {...props}>
    <Flex p={2}>
      <Text>Clickable area</Text>
    </Flex>
  </BedrockClickableArea>
);
