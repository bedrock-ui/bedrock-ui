import React from 'react';
import { Flex } from 'components/Flex';
import { Heading } from 'components/Heading';
import { TextInput } from 'components/TextInput';
import BedrockHeader from './Header';

import type { Props } from './Header.types';

export default {
  title: 'Header',
  component: BedrockHeader,
  argTypes: {},
};

export const Header = (props: Props) => (
  <BedrockHeader {...props}>
    <Flex justifyContent="space-between" style={{ width: '100%' }}>
      <Flex flexDirection="column" justifyContent="center">
        <Heading level={4}>Bedrock UI</Heading>
      </Flex>

      <Flex>
        <TextInput placeholder="Search" />
      </Flex>
    </Flex>
  </BedrockHeader>
);
