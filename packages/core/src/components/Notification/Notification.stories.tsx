import React from 'react';
import { Spacing } from 'components/Spacing';
import BedrockNotification from './Notification';

import type { Props } from './Notification.types';

export default {
  title: 'Notification',
  component: BedrockNotification,
  argTypes: {
    color: {
      control: { type: 'select' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: {
    color: 'info',
    title: 'Example title',
    message: 'Please wait until data is uploaded, you cannot close this notification yet',
  },
};

export const Notification = (props: Props) => (
  <>
    <BedrockNotification {...props} />
    <Spacing h={4} />
    <BedrockNotification {...props} />
  </>
);
