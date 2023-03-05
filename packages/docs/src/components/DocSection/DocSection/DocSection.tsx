import { Flex } from '@bedrock-ui/core';
import { Banner } from '../Banner';
import styles from './DocSection.module.scss';

import type { Props } from './DocSection.types';

function DocSection({ children, name }: Props) {
  return (
    <Flex className={styles.container} flexDirection="column">
      <Banner name={name} />

      {children}
    </Flex>
  );
}

export default DocSection;
