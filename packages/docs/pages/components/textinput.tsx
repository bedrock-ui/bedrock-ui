import { Grid, Heading, TextInput } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { TextInput } from '@bedrock-ui/core';
`.trim();

const TEXTINPUT_CODE = `
<TextInput />
`.trim();

const TEXTINPUT_ERROR_CODE = `
<TextInput error />
`.trim();

const TEXTINPUT_SUCCESS_CODE = `
<TextInput success />
`.trim();

function ComponentsTextInput() {
  return (
    <DocSection name="TextInput">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTINPUT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <TextInput />
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Error</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTINPUT_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <TextInput error />
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Success</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTINPUT_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <TextInput success />
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsTextInput;
