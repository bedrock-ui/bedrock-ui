import { Badge, Grid, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Badge } from '@bedrock-ui/core';
`.trim();

const COLOR_CODE = `
<Badge color="error|info|neutral|primary|success|warning">
  Badge
</Badge>
`;

function ComponentsBadge() {
  return (
    <DocSection name="Badge">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Color</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{COLOR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="error">Error</Badge>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="info">Info</Badge>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="neutral">Neutral</Badge>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="primary">Primary</Badge>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="success">Success</Badge>
        </Grid.Col>

        <Grid.Col span={1}>
          <Badge color="warning">Warning</Badge>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsBadge;
