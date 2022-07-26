import React from 'react';
import BedrockTextarea from './Textarea';

import type { Props } from './Textarea.types';

export default {
  title: 'Textarea',
  component: BedrockTextarea,
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

export const Textarea = (props: Props) => <BedrockTextarea {...props} />;
