import { Button, Grid, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Button } from '@bedrock-ui/core';
`.trim();

const VARIANT_CONTAINED_CODE = `
<Button variant="contained">
  Button
</Button>
`.trim();

const VARIANT_OUTLINED_CODE = `
<Button variant="outlined">
  Button
</Button>
`.trim();

const VARIANT_TEXT_CODE = `
<Button variant="outlined">
  Button
</Button>
`.trim();

const SQUARE_CODE = `
<Button square>
  Button
</Button>
`.trim();

function ComponentsButton() {
  return (
    <DocSection name="Button">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Contained</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{VARIANT_CONTAINED_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button>Button</Button>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Outlined</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{VARIANT_OUTLINED_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button variant="outlined">Button</Button>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Text</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{VARIANT_TEXT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button variant="text">Button</Button>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Square</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{VARIANT_TEXT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Button square>Button</Button>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsButton;
