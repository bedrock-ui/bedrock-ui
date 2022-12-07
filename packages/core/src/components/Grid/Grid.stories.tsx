import React from 'react';
import BedrockGrid from './Grid';

export default {
  title: 'Grid',
  component: BedrockGrid,
  argTypes: {},
};

export const Grid = () => (
  <BedrockGrid columnGap={4} rowGap={8}>
    <BedrockGrid.Col span={6}>
      <div
        style={{
          backgroundColor: '#eee',
          width: '100%',
        }}
      >
        1
      </div>
    </BedrockGrid.Col>

    <BedrockGrid.Col span={6}>
      <div
        style={{
          backgroundColor: '#eee',
          width: '100%',
        }}
      >
        1
      </div>
    </BedrockGrid.Col>

    <BedrockGrid.Col span={6}>
      <div
        style={{
          backgroundColor: '#eee',
          width: '100%',
        }}
      >
        1
      </div>
    </BedrockGrid.Col>
  </BedrockGrid>
);
