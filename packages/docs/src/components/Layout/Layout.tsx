import { useRouter } from 'next/router';
import { Flex } from '@bedrock-ui/core';
import { LeftPanel } from 'components/LeftPanel';
import styles from './Layout.module.css';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { pathname } = useRouter();

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <Flex>
      <LeftPanel />
      <Flex className={styles.content}>{children}</Flex>
    </Flex>
  );
}

export default Layout;
