import { Flex, Heading } from '@bedrock-ui/core';
import styles from './Banner.module.scss';

import type { Props } from './Banner.types';

function Banner({ name }: Props) {
  return (
    <Flex className={styles.banner} flexDirection="column">
      <Heading level={1}>{name}</Heading>
    </Flex>
  );
}

export default Banner;
