import { Grid, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Text } from '@bedrock-ui/core';
`.trim();

const TEXT_CODE = `
 <Text>
  Lorem ipsum dolor sit amet...
</Text>
`.trim();

const TEXT_PRIMARY_CODE = `
 <Text color="primary">
  Lorem ipsum dolor sit amet...
</Text>
`.trim();

const TEXT_WHITE_CODE = `
 <Text color="white">
  Lorem ipsum dolor sit amet...
</Text>
`.trim();

function ComponentsText() {
  return (
    <ComponentDocumentation name="Text">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Primary</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXT_PRIMARY_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Text color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>White</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TEXT_WHITE_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12} style={{ backgroundColor: 'var(--color-neutral-900)', padding: 16 }}>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>
        </Grid.Col>
      </Grid>
    </ComponentDocumentation>
  );
}

export default ComponentsText;
