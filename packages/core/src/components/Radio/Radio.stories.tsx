import React from 'react';
import BedrockRadio from './Radio';

import type { Props } from './Radio.types';

export default {
  title: 'Radio',
  component: BedrockRadio,
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

export const Radio = (props: Props) => <BedrockRadio {...props} />;
