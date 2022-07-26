import React from 'react';
import BedrockButton from './Button';

import type { Props } from './Button.types';

export default {
  title: 'Button',
  component: BedrockButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    square: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
    square: false,
  },
};

export const Button = (props: Props) => <BedrockButton {...props}>Button</BedrockButton>;
