import { useState } from 'react';
import { Button, Drawer, Flex, Grid, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Drawer } from '@bedrock-ui/core';
`.trim();

const DRAWER_CODE = `
<Drawer open={open}>
  Lorem ipsum dolor sit amet...
</Drawer>
`.trim();

const DRAWER_RIGHT_CODE = `
<Drawer open={open}>
  Lorem ipsum dolor sit amet...
</Drawer>
`.trim();

function ComponentsDrawer() {
  const [leftOpen, setLeftOpen] = useState<boolean>(false);
  const [rightOpen, setRightOpen] = useState<boolean>(false);

  return (
    <DocSection name="Drawer">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{DRAWER_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button onClick={() => setLeftOpen(!leftOpen)}>Open/Close Drawer</Button>

          <Drawer open={leftOpen}>
            <Flex style={{ padding: 16 }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Flex>
          </Drawer>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Right</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{DRAWER_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button onClick={() => setRightOpen(!rightOpen)}>Open/Close Drawer</Button>

          <Drawer position="right" open={rightOpen}>
            <Flex style={{ padding: 16 }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Flex>
          </Drawer>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsDrawer;
