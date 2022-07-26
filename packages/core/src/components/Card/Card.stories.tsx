import React from 'react';
import BedrockCard from './Card';

import type { Props } from './Card.types';

export default {
  title: 'Card',
  component: BedrockCard,
  argTypes: {},
};

export const Card = (props: Props) => <BedrockCard {...props}>Example card content</BedrockCard>;
