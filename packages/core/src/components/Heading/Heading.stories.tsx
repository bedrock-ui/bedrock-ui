import React from 'react';
import BedrockHeading from './Heading';

import type { Props } from './Heading.types';

export default {
  title: 'Heading',
  component: BedrockHeading,
  argTypes: {
    level: {
      control: {
        options: [1, 2, 3, 4, 5, 6],
        type: 'select',
      },
    },
  },
};

export const Heading = (props: Props) => (
  <BedrockHeading {...props}>Example Heading</BedrockHeading>
);

export const HeadingBold = (props: Props) => (
  <BedrockHeading {...props} bold>
    Example Heading
  </BedrockHeading>
);
