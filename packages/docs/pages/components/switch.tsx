import { useState } from 'react';
import { Switch, Grid, Flex, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Switch } from '@bedrock-ui/core';
`.trim();

const SWITCH_CODE = `
<Flex>
  <Switch checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const SWITCH_ERROR_CODE = `
<Flex>
  <Switch error checked={checked} onChange={() => setChecked(!checked)}/>
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const SWITCH_SUCCESS_CODE = `
<Flex>
  <Switch success checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

function ComponentsSwitch() {
  const [defaultChecked, setDefaultChecked] = useState<boolean>(false);
  const [errorChecked, setErrorChecked] = useState<boolean>(false);
  const [successChecked, setSuccessChecked] = useState<boolean>(false);

  return (
    <DocSection name="Switch">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SWITCH_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex alignItems="center">
            <Switch checked={defaultChecked} onChange={() => setDefaultChecked(!defaultChecked)} />
            <Flex ml={3}>
              <Text>Lorem ipsum</Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Error</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SWITCH_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex alignItems="center">
            <Switch checked={errorChecked} error onChange={() => setErrorChecked(!errorChecked)} />
            <Flex ml={3}>
              <Text>Lorem ipsum</Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Success</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SWITCH_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex alignItems="center">
            <Switch
              checked={successChecked}
              success
              onChange={() => setSuccessChecked(!successChecked)}
            />
            <Flex ml={3}>
              <Text>Lorem ipsum</Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsSwitch;
