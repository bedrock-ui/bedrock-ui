import { useState } from 'react';
import { Autocomplete, Flex, Grid, Heading, Spacing, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';
import { STATE_OPTIONS } from 'constants/states';

const CODE = `
import { Autocomplete } from '@bedrock-ui/core';
`.trim();

const SELECT_CODE = `
<Autocomplete>
  <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
  <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
  <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
</Autocomplete>
`.trim();

const GROUPED_CODE = `
const STATE_OPTIONS = {
  CO: ['Boulder', 'Denver'],
  NJ: ['Atlantic City', 'Jersey City', 'Trenton'],
  VA: ['Arlington', 'Richmond', 'Virginia Beach'],
};

<Autocomplete>
  {Object.keys(STATE_OPTIONS).map((state, index) => (
    <Flex flexDirection="column" key={index}>
      <Flex p={2}>
        <Text>{state}</Text>
      </Flex>

      {STATE_OPTIONS[state as keyof typeof STATE_OPTIONS].map((option, optionIndex) => (
        <Autocomplete.Option key={\`\${index}-\${optionIndex}\`}>
          <Flex px={2}>{option}</Flex>
        </Autocomplete.Option>
      ))}
    </Flex>
  ))}
</Autocomplete>
`.trim();

const SELECT_ERROR_CODE = `
<Autocomplete error>
  <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
  <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
  <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
</Autocomplete>
`.trim();

const SELECT_SUCCESS_CODE = `
<Autocomplete success>
  <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
  <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
  <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
</Autocomplete>
`.trim();

function ComponentsAutocomplete() {
  const [defaultValue, setDefaultValue] = useState<string>('');
  const [errorValue, setErrorValue] = useState<string>('');
  const [successValue, setSuccessValue] = useState<string>('');

  return (
    <DocSection name="Autocomplete">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Spacing h={4} />

      <Text>
        By default the Autocomplete component is very bare-bones. By having access to the individual
        Autocomplete options, it is easy to implement whatever filtering you want based on the
        inputValue prop. Since the Autocomplete children are passed directly through, it is also
        very easy to render custom option behavior like loading/async or grouping.
      </Text>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Autocomplete
            inputValue={defaultValue}
            onInputChange={(e) => setDefaultValue(e.currentTarget.value)}
            style={{ maxWidth: 320 }}
          >
            <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
            <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
            <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
          </Autocomplete>
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Custom Grouping</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{GROUPED_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Autocomplete
            inputValue=""
            onInputChange={(e) => console.log(e.currentTarget.value)}
            style={{ maxWidth: 320 }}
          >
            {Object.keys(STATE_OPTIONS).map((state, index) => (
              <Flex flexDirection="column" key={index}>
                <Flex style={{ paddingLeft: 8, paddingRight: 8 }}>
                  <Text>{state}</Text>
                </Flex>

                {STATE_OPTIONS[state as keyof typeof STATE_OPTIONS].map((option, optionIndex) => (
                  <Autocomplete.Option key={`${index}-${optionIndex}`}>
                    <Flex style={{ paddingLeft: 8, paddingRight: 8 }}>{option}</Flex>
                  </Autocomplete.Option>
                ))}
              </Flex>
            ))}
          </Autocomplete>
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Error</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_ERROR_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Autocomplete
            error
            inputValue={errorValue}
            onInputChange={(e) => setErrorValue(e.currentTarget.value)}
            style={{ maxWidth: 320 }}
          >
            <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
            <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
            <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
          </Autocomplete>
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Success</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{SELECT_SUCCESS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Autocomplete
            inputValue={successValue}
            onInputChange={(e) => setSuccessValue(e.currentTarget.value)}
            success
            style={{ maxWidth: 320 }}
          >
            <Autocomplete.Option>Lorem ipsum</Autocomplete.Option>
            <Autocomplete.Option>dolor sit amet</Autocomplete.Option>
            <Autocomplete.Option>consectetur adipiscing elit</Autocomplete.Option>
          </Autocomplete>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsAutocomplete;
