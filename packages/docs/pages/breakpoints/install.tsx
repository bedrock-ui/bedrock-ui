import { Flex, Heading, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

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
    <ComponentDocumentation name="Breakpoints">
      <Flex className="my-8">
        <Heading level={5}>Install</Heading>
      </Flex>

      <CodeHighlight>{INSTALL_CODE}</CodeHighlight>

      <Flex flexDirection="column" className="my-8">
        <Flex className="mb-2">
          <Heading level={5}>Usage</Heading>
        </Flex>

        <Text>
          Add the provider to inject breakpoints into your application. Breakpoints should be
          specified in order from the smallest width to the largest.
        </Text>
      </Flex>

      <CodeHighlight>{PROVIDER_CODE}</CodeHighlight>

      <Flex flexDirection="column" className="my-8">
        <Flex className="mb-2">
          <Heading level={5}>useBreakpoints</Heading>
        </Flex>

        <Text>
          This hook will return an object of boolean values for each breakpoint specified, with the
          currently active breakpoint set to true.
        </Text>
      </Flex>

      <CodeHighlight>{USE_BREAKPOINTS_CODE}</CodeHighlight>

      <Flex flexDirection="column" className="my-8">
        <Flex className="mb-2">
          <Heading level={5}>useBreakpointValues</Heading>
        </Flex>

        <Text>
          This hook will return an object containing the breakpoints that were passed into the
          provider.
        </Text>
      </Flex>

      <CodeHighlight>{USE_BREAKPOINT_VALUES_CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default BreakpointsInstall;
