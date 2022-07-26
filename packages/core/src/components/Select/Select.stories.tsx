import React, { useState } from 'react';
import BedrockSelect from './Select';

import type { Props } from './Select.types';

export default {
  title: 'Select',
  component: BedrockSelect,
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    selectedLabel: {
      control: { type: 'text' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
  args: {
    error: false,
    selectedLabel: 'Selected Label',
    success: false,
  },
};

export const Select = ({ selectedLabel, ...props }: Props) => {
  const [value, setValue] = useState<number>(0);

  return (
    <BedrockSelect {...props} selectedLabel={`${selectedLabel}: ${value}`}>
      <BedrockSelect.Option onClick={() => setValue(1)} selected={value === 1}>
        Example Option 1
      </BedrockSelect.Option>

      <BedrockSelect.Option onClick={() => setValue(2)} selected={value === 2}>
        Example Option 2
      </BedrockSelect.Option>

      <BedrockSelect.Option onClick={() => setValue(3)} selected={value === 3}>
        Example Option 3
      </BedrockSelect.Option>
    </BedrockSelect>
  );
};
