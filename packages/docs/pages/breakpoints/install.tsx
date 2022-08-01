import { Flex, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const INSTALL_CODE = `
(npm|yarn|pnpm) install @bedrock-ui/breakpoints
`.trim();

const PROVIDER_CODE = `
import { BreakpointsProvider } from '@bedrock-ui/breakpoints';

<BreakpointsProvider breakpoints={{
  mobile: 0,
  tablet: 600,
  desktop: 1024,
}}>
  // children
</BreakpointsProvider>
`.trim();

const USE_BREAKPOINTS_CODE = `
import { useBreakpoints } from '@bedrock-ui/breakpoints';

function Responsive() {
  const matches = useBreakpoints();

  // { mobile: false, tablet: false, desktop: true }
}
`.trim();

const USE_BREAKPOINT_VALUES_CODE = `
import { useBreakpointValues } from '@bedrock-ui/breakpoints';

function Responsive() {
  const breakpoints = useBreakpointValues();

  // { mobile: 0, tablet: 600, desktop: 1024 }
}
`.trim();

function BreakpointsInstall() {
  return (
    <DocSection name="Breakpoints">
      <Flex my={8}>
        <Heading level={5}>Install</Heading>
      </Flex>

      <CodeHighlight>{INSTALL_CODE}</CodeHighlight>

      <Flex flexDirection="column" style={{ marginTop: 32, marginBottom: 32 }}>
        <Flex style={{ marginBottom: 8 }}>
          <Heading level={5}>Usage</Heading>
        </Flex>

        <Text>
          Add the provider to inject breakpoints into your application. Breakpoints should be
          specified in order from the smallest width to the largest.
        </Text>
      </Flex>

      <CodeHighlight>{PROVIDER_CODE}</CodeHighlight>

      <Flex flexDirection="column" style={{ marginTop: 32, marginBottom: 32 }}>
        <Flex style={{ marginBottom: 8 }}>
          <Heading level={5}>useBreakpoints</Heading>
        </Flex>

        <Text>
          This hook will return an object of boolean values for each breakpoint specified, with the
          currently active breakpoint set to true.
        </Text>
      </Flex>

      <CodeHighlight>{USE_BREAKPOINTS_CODE}</CodeHighlight>

      <Flex flexDirection="column" style={{ marginTop: 32, marginBottom: 32 }}>
        <Flex style={{ marginBottom: 8 }}>
          <Heading level={5}>useBreakpointValues</Heading>
        </Flex>

        <Text>
          This hook will return an object containing the breakpoints that were passed into the
          provider.
        </Text>
      </Flex>

      <CodeHighlight>{USE_BREAKPOINT_VALUES_CODE}</CodeHighlight>
    </DocSection>
  );
}

export default BreakpointsInstall;
