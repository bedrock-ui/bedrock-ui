import React from 'react';
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
    <Text>Clickable area</Text>
  </BedrockClickableArea>
);
