import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Heading } from '../Heading';
import BedrockDrawer from './Drawer';

import type { Props } from './Drawer.types';

export default {
  title: 'Drawer',
  component: BedrockDrawer,
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    position: {
      control: { type: 'select' },
    },
  },
  args: {
    open: false,
    position: 'left',
  },
};

export const Drawer = (props: Props) => {
  const [args, updateArgs] = useArgs();

  return (
    <BedrockDrawer {...props} onClose={() => updateArgs({ open: false })}>
      <Heading level={1}>Drawer</Heading>
    </BedrockDrawer>
  );
};
