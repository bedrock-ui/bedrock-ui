import React from 'react';
import { Text } from '../Text';
import BedrockList from './List';

import type { Props } from './List.types';

export default {
  title: 'List',
  component: BedrockList,
  argTypes: {},
};

export const List = (props: Props) => (
  <BedrockList {...props}>
    <BedrockList.Item>
      <Text>List Item 1</Text>
    </BedrockList.Item>

    <BedrockList.Item>
      <Text>List Item 2</Text>
    </BedrockList.Item>

    <BedrockList.Item>
      <Text>List Item 3</Text>
    </BedrockList.Item>
  </BedrockList>
);
