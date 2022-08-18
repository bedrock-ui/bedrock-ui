import { Flex, Heading } from '@bedrock-ui/core';
import styles from './BlogArticle.module.css';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

function BlogArticle({ children, title }: Props) {
  return (
    <Flex className={styles.content} flexDirection="column">
      <Heading className={styles.title} level={1}>
        {title}
      </Heading>
      {children}
    </Flex>
  );
}

export default BlogArticle;
