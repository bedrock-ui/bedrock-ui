import { Grid, Link, List } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { List } from '@bedrock-ui/core';
`.trim();

const LIST_CODE = `
<List>
  <List.Item>Lorem ipsum</List.Item>
  <List.Item>dolor sit amet</List.Item>
  <List.Item>consectetur adipiscing elit</List.Item>
</List>
`;

function ComponentsList() {
  return (
    <DocSection name="List">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{LIST_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <List>
            <List.Item>Lorem ipsum</List.Item>
            <List.Item>dolor sit amet</List.Item>
            <List.Item>consectetur adipiscing elit</List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsList;
