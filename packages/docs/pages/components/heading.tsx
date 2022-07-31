import { Flex, Grid, Heading } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Heading } from '@bedrock-ui/core';
`.trim();

const HEADING_CODE = `
<Heading level={1|2|3|4|5|6}>Heading</Heading>
`.trim();

function ComponentsHeading() {
  return (
    <DocSection name="Heading">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{HEADING_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex flexDirection="column">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsHeading;
