import { Grid, Heading, Highlight } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Highlight } from '@bedrock-ui/core';
`.trim();

const HIGHLIGHT_CODE = `
<Highlight 
highlight="consectetur" 
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
/>
`.trim();

const HIGHLIGHT_MULTIPLE_CODE = `
<Highlight 
highlight={['consectetur', 'dolore']}
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
/>
`.trim();

function ComponentsHighlight() {
  return (
    <DocSection name="Highlight">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Single Word</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{HIGHLIGHT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Highlight
            highlight="consectetur"
            text="            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
          />
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Multiple Words</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{HIGHLIGHT_MULTIPLE_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Highlight
            highlight={['consectetur', 'dolore']}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
          />
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsHighlight;
