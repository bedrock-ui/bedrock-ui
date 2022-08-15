import React from 'react';
import BedrockGrid from './Grid';

import type { Props } from './Grid.types';

export default {
  title: 'Grid',
  component: BedrockGrid,
  argTypes: {},
};

export const Grid = (props: Props) => (
  <BedrockGrid {...props}>
    <BedrockGrid.Col span={{ mobile: 12, tablet: 12, desktop: 4 }}>1</BedrockGrid.Col>
    <BedrockGrid.Col span={{ mobile: 12, tablet: 12, desktop: 4 }}>2</BedrockGrid.Col>
    <BedrockGrid.Col span={{ mobile: 12, tablet: 12, desktop: 4 }}>3</BedrockGrid.Col>
  </BedrockGrid>
);
