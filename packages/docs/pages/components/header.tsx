import { Flex, Header, Heading, Grid, Spacing } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Header } from '@bedrock-ui/core';
`.trim();

const HEADER_CODE = `
 <Header>
  <Flex flexDirection="column" justifyContent="center">
    <Heading level={4}>Header</Heading>
  </Flex>
</Header>
`.trim();

function ComponentsHeader() {
  return (
    <DocSection name="Header">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{HEADER_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex
            fullWidth
            justifyContent="center"
            style={{
              backgroundColor: 'var(--color-neutral-100)',
            }}
          >
            <Spacing h={16} />

            <Header>
              <Flex flexDirection="column" justifyContent="center">
                <Heading level={4}>Header</Heading>
              </Flex>
            </Header>

            <Spacing h={16} />
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsHeader;
