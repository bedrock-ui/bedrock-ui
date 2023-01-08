import React from 'react';
import { Text } from 'components/Text';
import BedrockAlert from './Alert';

import type { Props } from './Alert.types';

export default {
  title: 'Alert',
  component: BedrockAlert,
  argTypes: {},
  args: {
    severity: 'error',
  },
};

export const Alert = ({ variant, ...props }: Props) => (
  <BedrockAlert variant={variant} {...props}>
    <Text color={variant === 'filled' ? 'white' : undefined}>Example alert</Text>
  </BedrockAlert>
);
