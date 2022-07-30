import { useState } from 'react';
import { Checkbox, Grid, Flex, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Checkbox } from '@bedrock-ui/core';
`.trim();

const CHECKBOX_CODE = `
<Flex>
  <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const CHECKBOX_ERROR_CODE = `
<Flex>
  <Checkbox error />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

const CHECKBOX_SUCCESS_CODE = `
<Flex>
  <Checkbox success />
  <Text>Lorem ipsum</Text>
</Flex>
`.trim();

function ComponentsCheckbox() {
  const [defaultChecked, setDefaultChecked] = useState<boolean>(false);
  const [errorChecked, setErrorChecked] = useState<boolean>(false);
  const [successChecked, setSuccessChecked] = useState<boolean>(false);

  return (
    <ComponentDocumentation name="Checkbox">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{CHECKBOX_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Checkbox
              checked={defaultChecked}
              onChange={() => setDefaultChecked(!defaultChecked)}
            />
            <Flex style={{ marginLeft: 12 }}>
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
          <CodeHighlight>{CHECKBOX_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Checkbox
              checked={errorChecked}
              error
              onChange={() => setErrorChecked(!errorChecked)}
            />
            <Flex style={{ marginLeft: 12 }}>
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
          <CodeHighlight>{CHECKBOX_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Checkbox
              checked={successChecked}
              success
              onChange={() => setSuccessChecked(!successChecked)}
            />
            <Flex style={{ marginLeft: 12 }}>
              <Text>Lorem ipsum</Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </ComponentDocumentation>
  );
}

export default ComponentsCheckbox;
