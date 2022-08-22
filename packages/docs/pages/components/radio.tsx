import { useState } from 'react';
import { Flex, Grid, Heading, Radio, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Radio } from '@bedrock-ui/core';
`.trim();

const RADIO_CODE = `
<Flex>
  <Radio checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const RADIO_ERROR_CODE = `
<Flex>
  <Radio error checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const RADIO_SUCCESS_CODE = `
<Flex>
  <Radio success checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

function ComponentsRadio() {
  const [defaultChecked, setDefaultChecked] = useState<boolean>(false);
  const [errorChecked, setErrorChecked] = useState<boolean>(false);
  const [successChecked, setSuccessChecked] = useState<boolean>(false);

  return (
    <DocSection name="Checkbox">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{RADIO_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Radio checked={defaultChecked} onChange={() => setDefaultChecked(!defaultChecked)} />
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
          <CodeHighlight>{RADIO_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Radio checked={errorChecked} error onChange={() => setErrorChecked(!errorChecked)} />
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
          <CodeHighlight>{RADIO_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Radio
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

export default ComponentsRadio;
