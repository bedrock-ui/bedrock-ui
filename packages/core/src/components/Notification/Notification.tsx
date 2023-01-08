import React from 'react';
import clsx from 'clsx';
import { Flex } from 'components/Flex';
import { Text } from 'components/Text';

import type { Props } from './Notification.types';

function Notification({ className, color, message, title, ...props }: Props) {
  return (
    <Flex {...props} className={clsx('notification', className)}>
      <div className={clsx('line', color)} />

      <Flex className="content" flexDirection="column" fullWidth>
        {title && <Text bold>{title}</Text>}

        {message && <Text color="neutral">{message}</Text>}
      </Flex>
    </Flex>
  );
}

export default Notification;
