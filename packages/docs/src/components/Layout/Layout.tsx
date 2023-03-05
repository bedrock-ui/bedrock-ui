import { IconBrandGithub, IconMenu2 } from '@tabler/icons';
import { Button, Flex, Header, Heading, Hidden, Link, Spacing } from '@bedrock-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LeftPanel } from 'components/LeftPanel';
import styles from './Layout.module.scss';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <>
      <Header position="fixed">
        <Flex justifyContent="space-between" style={{ width: '100%' }}>
          <Hidden on={{ mobile: false, tablet: true, desktop: true }}>
            <Flex>
              <Button onClick={() => setOpen(!open)} variant="text">
                <IconMenu2 size={24} />
              </Button>
            </Flex>
          </Hidden>

          <Flex flexDirection="column" justifyContent="center">
            <NextLink href="/" style={{ textDecoration: 'none' }}>
              <Heading level={4}>Bedrock UI</Heading>
            </NextLink>
          </Flex>

          <Flex>
            <Spacing w={6} />

            <Flex flexDirection="column" justifyContent="center">
              <NextLink href="/blog" passHref legacyBehavior>
                <Link>Blog</Link>
              </NextLink>
            </Flex>

            <Spacing w={6} />

            <Button
              onClick={() => window.open('https://github.com/matthewwolfe/bedrock-ui', '_blank')}
              square
              variant="text"
            >
              <IconBrandGithub size={24} />
            </Button>
          </Flex>
        </Flex>
      </Header>

      <Spacing h={16} />

      <Flex>
        {pathname.startsWith('/blog') ? (
          children
        ) : (
          <>
            <LeftPanel open={open} onClose={() => setOpen(false)} />
            <Flex className={styles.content}>{children}</Flex>
          </>
        )}
      </Flex>
    </>
  );
}

export default Layout;
