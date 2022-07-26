import { Flex } from '@bedrock-ui/core';
import { Banner } from '../Banner';
import styles from './ComponentDocumentation.module.css';

import type { Props } from './ComponentDocumentation.types';

function ComponentDocumentation({ children, name }: Props) {
  return (
    <Flex className={styles.container} flexDirection="column">
      <Banner name={name} />

      {children}
    </Flex>
  );
}

export default ComponentDocumentation;
