import React from 'react';
import BedrockFlex from './Flex';

import type { Props } from './Flex.types';

export default {
  title: 'Flex',
  component: BedrockFlex,
  argTypes: {
    flexDirection: {
      control: { type: 'select' },
    },
    justifyContent: {
      control: { type: 'select' },
    },
  },
};

export const Flex = (props: Props) => (
  <BedrockFlex {...props}>
    <div style={{ margin: 16, padding: 24, border: '1px solid #000' }}>1</div>
    <div style={{ margin: 16, padding: 24, border: '1px solid #000' }}>2</div>
    <div style={{ margin: 16, padding: 24, border: '1px solid #000' }}>3</div>
  </BedrockFlex>
);
