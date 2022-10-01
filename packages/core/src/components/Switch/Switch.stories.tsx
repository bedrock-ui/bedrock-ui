import React from 'react';
import { useArgs } from '@storybook/client-api';
import BedrockSwitch from './Switch';

import type { Props } from './Switch.types';

export default {
  title: 'Switch',
  component: BedrockSwitch,
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

export const Switch = (props: Props) => {
  const [args, updateArgs] = useArgs();

  return <BedrockSwitch {...props} onChange={(checked) => updateArgs({ checked })} />;
};
