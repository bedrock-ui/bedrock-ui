import React from 'react';
import { useArgs } from '@storybook/client-api';
import BedrockTabs from './Tabs';

import type { Props } from './Tabs.types';

export default {
  title: 'Tabs',
  component: BedrockTabs,
};

export const Tabs = (props: Props) => {
  const [args, updateArgs] = useArgs();

  return (
    <BedrockTabs {...props}>
      <BedrockTabs.Tab active={args.active === 0} onClick={() => updateArgs({ active: 0 })}>
        Tab 1
      </BedrockTabs.Tab>

      <BedrockTabs.Tab active={args.active === 1} onClick={() => updateArgs({ active: 1 })}>
        Tab 2
      </BedrockTabs.Tab>

      <BedrockTabs.Tab active={args.active === 2} onClick={() => updateArgs({ active: 2 })}>
        Tab 3
      </BedrockTabs.Tab>
    </BedrockTabs>
  );
};
