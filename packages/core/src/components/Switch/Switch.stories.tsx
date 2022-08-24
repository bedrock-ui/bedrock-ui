import React from 'react';
import BedrockSwitch from './Switch';

import type { Props } from './Switch.types';

export default {
  title: 'Switch',
  component: BedrockSwitch,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'text' },
    },
  },
  args: {
    checked: false,
  },
};

export const Switch = (props: Props) => <BedrockSwitch {...props} />;
