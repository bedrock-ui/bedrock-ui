import { Grid, Heading, List, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Flex } from '@bedrock-ui/core';
`.trim();

const FLEX_CODE = `
<Flex>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.
</Flex>
`.trim();

function ComponentsFlex() {
  return (
    <DocSection name="Flex">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{FLEX_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Heading level={5} style={{ marginBottom: 12 }}>
            Flex Direction
          </Heading>
          <List>
            <List.Item>
              <Text>column</Text>
            </List.Item>

            <List.Item>
              <Text>column-reverse</Text>
            </List.Item>

            <List.Item>
              <Text>row-reverse</Text>
            </List.Item>
          </List>
        </Grid.Col>

        <Grid.Col span={12}>
          <Heading level={5} style={{ marginBottom: 12 }}>
            Justify Content
          </Heading>

          <List>
            <List.Item>
              <Text>center</Text>
            </List.Item>

            <List.Item>
              <Text>end</Text>
            </List.Item>

            <List.Item>
              <Text>flex-end</Text>
            </List.Item>

            <List.Item>
              <Text>left</Text>
            </List.Item>

            <List.Item>
              <Text>flex-start</Text>
            </List.Item>

            <List.Item>
              <Text>right</Text>
            </List.Item>

            <List.Item>
              <Text>space-around</Text>
            </List.Item>

            <List.Item>
              <Text>space-between</Text>
            </List.Item>

            <List.Item>
              <Text>space-evenly</Text>
            </List.Item>

            <List.Item>
              <Text>start</Text>
            </List.Item>

            <List.Item>
              <Text>stretch</Text>
            </List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsFlex;
