import React from 'react';
import BedrockBox from './Box';

import type { Props } from './Box.types';

export default {
  title: 'Box',
  component: BedrockBox,
  argTypes: {},
};

export const Box = (props: Props) => <BedrockBox {...props}>Box content</BedrockBox>;
