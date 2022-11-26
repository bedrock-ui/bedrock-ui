import React, { useMemo, useState } from 'react';
import BedrockAutocomplete from './Autocomplete';

import type { Props } from './Autocomplete.types';

export default {
  title: 'Autocomplete',
  component: BedrockAutocomplete,
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
  args: {
    error: false,
    success: false,
  },
};

export const Autocomplete = (props: Props) => {
  const [value, setValue] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  const options = useMemo(
    () => [
      {
        label: 'Example Option 1',
        onClick: () => {
          setValue(1);
          setInputValue('Example Option 1');
        },
        value: 1,
      },
      {
        label: 'Example Option 2',
        onClick: () => {
          setValue(2);
          setInputValue('Example Option 2');
        },
        value: 2,
      },
      {
        label: 'Example Option 3',
        onClick: () => {
          setValue(3);
          setInputValue('Example Option 3');
        },
        value: 3,
      },
      {
        label: 'Example Option 4',
        onClick: () => {
          setValue(4);
          setInputValue('Example Option 4');
        },
        value: 4,
      },
      {
        label: 'Example Option 5',
        onClick: () => {
          setValue(5);
          setInputValue('Example Option 5');
        },
        value: 5,
      },
    ],
    []
  );

  return (
    <BedrockAutocomplete
      {...props}
      inputValue={inputValue}
      onInputChange={(e) => setInputValue(e.currentTarget.value)}
    >
      {options.map((option, key) => (
        <BedrockAutocomplete.Option onClick={option.onClick} selected={value === option.value}>
          {option.label}
        </BedrockAutocomplete.Option>
      ))}
    </BedrockAutocomplete>
  );
};
