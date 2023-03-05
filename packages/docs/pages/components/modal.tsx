import { useState } from 'react';
import { Button, Flex, Grid, Heading, Modal, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Modal } from '@bedrock-ui/core';
`.trim();

const MODAL_CODE = `
<Modal open={open}>
  Lorem ipsum dolor sit amet...
</Modal>
`.trim();

const MODAL_NO_PADDING_CODE = `
<Modal noPadding open={open}>
  Lorem ipsum dolor sit amet...
</Modal>
`.trim();

function ComponentsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [noPaddingOpen, setNoPaddingOpen] = useState<boolean>(false);

  return (
    <DocSection name="Modal">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{MODAL_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Button onClick={() => setOpen(!open)}>Open/Close Modal</Button>
          </Flex>

          <Modal open={open} onClose={() => setOpen(!open)}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </Modal>
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>No Padding</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{MODAL_NO_PADDING_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Button onClick={() => setNoPaddingOpen(!noPaddingOpen)}>Open/Close Modal</Button>
          </Flex>

          <Modal noPadding open={noPaddingOpen} onClose={() => setNoPaddingOpen(!noPaddingOpen)}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </Modal>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsModal;
