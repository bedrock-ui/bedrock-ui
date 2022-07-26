import React from 'react';
import BedrockLink from './Link';

import type { Props } from './Link.types';

export default {
  title: 'Link',
  component: BedrockLink,
  argTypes: {},
};

export const Link = (props: Props) => <BedrockLink {...props}>Example Link</BedrockLink>;
