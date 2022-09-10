import React from 'react';
import BedrockHidden from './Hidden';

import type { Props } from './Hidden.types';

export default {
  title: 'Hidden',
  component: BedrockHidden,
  argTypes: {},
};

export const Hidden = (props: Props) => <BedrockHidden {...props}>Hidden content</BedrockHidden>;
