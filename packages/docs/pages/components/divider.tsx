import { Divider, Flex, Grid, Heading, Spacing } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Divider } from '@bedrock-ui/core';
`.trim();

const DIVIDER_CODE = `
<Divider />

<Divider variant="dashed" />

<Divider variant="dotted" />
`.trim();

function ComponentsDivider() {
  return (
    <DocSection name="Divider">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{DIVIDER_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex flexDirection="column">
            <Flex fullWidth>
              <Divider />
              <Spacing h={6} />
            </Flex>

            <Flex fullWidth>
              <Divider variant="dashed" />
              <Spacing h={6} />
            </Flex>

            <Flex style={{ width: '100%' }}>
              <Divider variant="dotted" />
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsDivider;
