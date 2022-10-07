import { Drawer, Flex, Hidden, Text } from '@bedrock-ui/core';
import { Link } from '../Link';
import styles from './LeftPanel.module.css';

import type { ReactNode } from 'react';

interface SharedProps {
  open: boolean;
  onClose: () => void;
}

interface Props extends SharedProps {}

interface WrapperProps extends SharedProps {
  children: ReactNode;
}

function Wrapper({ children, open, onClose }: WrapperProps) {
  return (
    <>
      <Hidden on={{ mobile: false, tablet: true, desktop: true }}>
        <Drawer open={open} onClose={onClose} style={{ zIndex: 1100 }}>
          <Flex flexDirection="column" p={4}>
            {children}
          </Flex>
        </Drawer>
      </Hidden>

      <Hidden on={{ mobile: true, tablet: false, desktop: false }}>
        <Flex className={styles.leftPanel} flexDirection="column">
          {children}
        </Flex>
      </Hidden>
    </>
  );
}

function LeftPanel({ open, onClose }: Props) {
  return (
    <Wrapper open={open} onClose={onClose}>
      <Text>
        <p>Getting Started</p>
      </Text>

      <Link href="/getting-started/overview">Getting Started</Link>
      <Link href="/getting-started/install">Installation</Link>

      <Text>
        <p>Core</p>
      </Text>

      <Link href="/components/alert">Alert</Link>
      <Link href="/components/badge">Badge</Link>
      <Link href="/components/button">Button</Link>
      <Link href="/components/card">Card</Link>
      <Link href="/components/checkbox">Checkbox</Link>
      <Link href="/components/divider">Divider</Link>
      <Link href="/components/drawer">Drawer</Link>
      <Link href="/components/flex">Flex</Link>
      <Link href="/components/grid">Grid</Link>
      <Link href="/components/header">Header</Link>
      <Link href="/components/heading">Heading</Link>
      <Link href="/components/highlight">Highlight</Link>
      <Link href="/components/link">Link</Link>
      <Link href="/components/list">List</Link>
      <Link href="/components/modal">Modal</Link>
      <Link href="/components/radio">Radio</Link>
      <Link href="/components/select">Select</Link>
      <Link href="/components/table">Table</Link>
      <Link href="/components/tabs">Tabs</Link>
      <Link href="/components/text">Text</Link>
      <Link href="/components/textarea">Textarea</Link>
      <Link href="/components/textinput">TextInput</Link>

      <Text>
        <p>Icons</p>
      </Text>

      <Link href="/icons/libraries">Icon Libraries</Link>

      <Text>
        <p>Variables</p>
      </Text>

      <Link href="/variables/root">Root Variables</Link>
    </Wrapper>
  );
}

export default LeftPanel;
