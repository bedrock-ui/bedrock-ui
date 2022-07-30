import { Grid, Heading, Select } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Select } from '@bedrock-ui/core';
`.trim();

const SELECT_CODE = `
<Select>
  <Select.Option>Lorem ipsum</Select.Option>
  <Select.Option>dolor sit amet</Select.Option>
  <Select.Option>consectetur adipiscing elit</Select.Option>
</Select>
`.trim();

const SELECT_ERROR_CODE = `
<Select error>
  <Select.Option>Lorem ipsum</Select.Option>
  <Select.Option>dolor sit amet</Select.Option>
  <Select.Option>consectetur adipiscing elit</Select.Option>
</Select>
`.trim();

const SELECT_SUCCESS_CODE = `
<Select success>
  <Select.Option>Lorem ipsum</Select.Option>
  <Select.Option>dolor sit amet</Select.Option>
  <Select.Option>consectetur adipiscing elit</Select.Option>
</Select>
`.trim();

function ComponentsSelect() {
  return (
    <ComponentDocumentation name="Select">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Select style={{ maxWidth: 320 }}>
            <Select.Option>Lorem ipsum</Select.Option>
            <Select.Option>dolor sit amet</Select.Option>
            <Select.Option>consectetur adipiscing elit</Select.Option>
          </Select>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Error</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Select error style={{ maxWidth: 320 }}>
            <Select.Option>Lorem ipsum</Select.Option>
            <Select.Option>dolor sit amet</Select.Option>
            <Select.Option>consectetur adipiscing elit</Select.Option>
          </Select>
        </Grid.Col>
      </Grid>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Success</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Select success style={{ maxWidth: 320 }}>
            <Select.Option>Lorem ipsum</Select.Option>
            <Select.Option>dolor sit amet</Select.Option>
            <Select.Option>consectetur adipiscing elit</Select.Option>
          </Select>
        </Grid.Col>
      </Grid>
    </ComponentDocumentation>
  );
}

export default ComponentsSelect;
