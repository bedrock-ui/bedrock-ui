import { Flex, Link as BedrockLink } from '@bedrock-ui/core';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styles from './Link.module.css';

import type { Props } from './Link.types';

function Link({ children, href }: Props) {
  const { pathname } = useRouter();

  return (
    <NextLink href={href} passHref>
      <BedrockLink
        className={clsx(styles.link, {
          [styles.linkActive]: pathname === href,
        })}
      >
        {children}
      </BedrockLink>
    </NextLink>
  );
}

export default Link;
