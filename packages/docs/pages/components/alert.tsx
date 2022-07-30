import { Alert, Grid, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Alert } from '@bedrock-ui/core';
`.trim();

const SEVERITY_CODE = `
<Alert severity="error|info|success|warning">
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </Text>
</Alert>
`;

const VARIANT_FILLED_CODE = `
<Alert  severity="error|info|success|warning" variant="filled">
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </Text>
</Alert>
`;

const VARIANT_OUTLINED_CODE = `
<Alert  severity="error|info|success|warning" variant="outlined">
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </Text>
</Alert>
`;

function ComponentsAlert() {
  return (
    <ComponentDocumentation name="Alert">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Severity</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SEVERITY_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="error">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="info">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="success">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="warning">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Filled</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{VARIANT_FILLED_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="error" variant="filled">
            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="info" variant="filled">
            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="success" variant="filled">
            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="warning" variant="filled">
            <Text color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
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
          <Alert severity="error" variant="outlined">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="info" variant="outlined">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="success" variant="outlined">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>

        <Grid.Col span={12}>
          <Alert severity="warning" variant="outlined">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Alert>
        </Grid.Col>
      </Grid>
    </ComponentDocumentation>
  );
}

export default ComponentsAlert;
