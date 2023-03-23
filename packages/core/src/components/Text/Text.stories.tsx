import React from 'react';
import BedrockText from './Text';

import type { Props } from './Text.types';

export default {
  title: 'Text',
  component: BedrockText,
};

export const Text = (props: Props) => <BedrockText {...props}>Example Text</BedrockText>;

export const TextBold = (props: Props) => (
  <BedrockText {...props} bold>
    Example Text
  </BedrockText>
);
