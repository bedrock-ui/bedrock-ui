import { Flex, Grid, Spacing, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Spacing } from '@bedrock-ui/core';
`.trim();

const SPACING_HEIGHT_CODE = `
<Text>Hello</Text>
<Spacing h={8} />
<Text>World</Text>
`.trim();

const SPACING_WIDTH_CODE = `
<Flex>
  <Text>Hello</Text>
  <Spacing w={8} />
  <Text>World</Text>
</Flex>
`.trim();

function ComponentsLink() {
  return (
    <DocSection name="Hidden">
      <Text>
        Adds horizontal or vertical spacing between two or more components. The max number that can
        be passed to spacing is 16.
      </Text>

      <Spacing h={8} />

      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{SPACING_HEIGHT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text>Hello</Text>

          <Spacing h={8} />

          <Text>World</Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SPACING_WIDTH_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Text>Hello</Text>
            <Spacing w={8} />
            <Text>World</Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsLink;
