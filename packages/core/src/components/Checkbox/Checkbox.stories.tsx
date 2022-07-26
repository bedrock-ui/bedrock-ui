import React from 'react';
import BedrockCheckbox from './Checkbox';

import type { Props } from './Checkbox.types';

export default {
  title: 'Checkbox',
  component: BedrockCheckbox,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
  args: {
    checked: false,
    disabled: false,
    error: false,
    success: false,
  },
};

export const Checkbox = (props: Props) => <BedrockCheckbox {...props} />;
