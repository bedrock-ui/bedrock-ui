import { Flex } from '@bedrock-ui/core';
import { Link } from '../Link';

import styles from './LeftPanel.module.css';

function LeftPanel() {
  return (
    <Flex className={styles.leftPanel} flexDirection="column">
      <p>Getting Started</p>

      <Link href="/getting-started/overview">Getting Started</Link>
      <Link href="/getting-started/install">Installation</Link>

      <p>Core</p>

      <Link href="/components/alert">Alert</Link>
      <Link href="/components/button">Button</Link>
      <Link href="/components/card">Card</Link>
      <Link href="/components/checkbox">Checkbox</Link>
      <Link href="/components/divider">Divider</Link>
      <Link href="/components/drawer">Drawer</Link>
      <Link href="/components/flex">Flex</Link>
      <Link href="/components/grid">Grid</Link>
      <Link href="/components/heading">Heading</Link>
      <Link href="/components/highlight">Highlight</Link>
      <Link href="/components/link">Link</Link>
      <Link href="/components/list">List</Link>
      <Link href="/components/modal">Modal</Link>
      <Link href="/components/radio">Radio</Link>
      <Link href="/components/select">Select</Link>
      <Link href="/components/tabs">Tabs</Link>
      <Link href="/components/text">Text</Link>
      <Link href="/components/textarea">Textarea</Link>
      <Link href="/components/textinput">TextInput</Link>

      <p>Breakpoints</p>

      <Link href="/breakpoints/install">Install</Link>

      <p>Variables</p>

      <Link href="/variables/root">Root Variables</Link>
    </Flex>
  );
}

export default LeftPanel;
