import { IconSelector } from '@tabler/icons-react';
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

const OPTIONS = [
  { label: 'Example Option 1', value: 1 },
  { label: 'Example Option 2', value: 2 },
  { label: 'Example Option 3', value: 3 },
  { label: 'Example Option 4', value: 4 },
  { label: 'Example Option 5', value: 5 },
];

export const Select = ({ selectedLabel, ...props }: Props) => {
  const [value, setValue] = useState<number>(0);

  return (
    <BedrockSelect
      {...props}
      rightIcon={<IconSelector color="#757575" stroke={1.5} size={20} />}
      selectedLabel={`${selectedLabel}: ${value}`}
    >
      {OPTIONS.map((option, key) => (
        <BedrockSelect.Option
          key={key}
          onClick={() => setValue(option.value)}
          selected={value === option.value}
        >
          {option.label}
        </BedrockSelect.Option>
      ))}
    </BedrockSelect>
  );
};

export const SelectWithIcon = ({ selectedLabel, ...props }: Props) => {
  const [value, setValue] = useState<number>(0);

  return (
    <BedrockSelect {...props} selectedLabel={`${selectedLabel}: ${value}`}>
      {OPTIONS.map((option, key) => (
        <BedrockSelect.Option
          key={key}
          onClick={() => setValue(option.value)}
          selected={value === option.value}
        >
          {option.label}
        </BedrockSelect.Option>
      ))}
    </BedrockSelect>
  );
};
