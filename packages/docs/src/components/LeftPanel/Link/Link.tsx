import { Link as BedrockLink } from '@bedrock-ui/core';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styles from './Link.module.scss';

import type { Props } from './Link.types';

function Link({ children, href }: Props) {
  const { pathname } = useRouter();

  return (
    <NextLink href={href} passHref legacyBehavior>
      <BedrockLink
        className={clsx(styles.link, {
          [styles.linkActive]: pathname === href,
        })}
        underline="none"
      >
        {children}
      </BedrockLink>
    </NextLink>
  );
}

export default Link;
