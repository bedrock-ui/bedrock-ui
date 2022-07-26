import React from 'react';
import BedrockTextInput from './TextInput';

import type { Props } from './TextInput.types';

export default {
  title: 'TextInput',
  component: BedrockTextInput,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    },
  },
  args: {
    error: false,
    placeholder: 'Enter something',
    success: false,
    value: '',
  },
};

export const TextInput = (props: Props) => <BedrockTextInput {...props} />;
