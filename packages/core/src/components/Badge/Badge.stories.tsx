import React from 'react';
import { Text } from 'components/Text';
import BedrockBadge from './Badge';

import type { Props } from './Badge.types';

export default {
  title: 'Badge',
  component: BedrockBadge,
  argTypes: {},
};

export const Badge = (props: Props) => <BedrockBadge {...props}>Badge</BedrockBadge>;
