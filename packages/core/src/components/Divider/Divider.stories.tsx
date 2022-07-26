import React from 'react';
import BedrockDivider from './Divider';

import type { Props } from './Divider.types';

export default {
  title: 'Divider',
  component: BedrockDivider,
  argTypes: {},
};

export const Divider = (props: Props) => <BedrockDivider {...props} />;
