import { Grid, Heading, Textarea } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Textarea } from '@bedrock-ui/core';
`.trim();

const TEXTAREA_CODE = `
<Textarea />
`.trim();

const TEXTAREA_ERROR_CODE = `
<Textarea error />
`.trim();

const TEXTAREA_SUCCESS_CODE = `
<Textarea success />
`.trim();

function ComponentsTextarea() {
  return (
    <DocSection name="Textarea">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTAREA_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea />
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Error</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTAREA_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea error />
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Success</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXTAREA_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea success />
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsTextarea;
