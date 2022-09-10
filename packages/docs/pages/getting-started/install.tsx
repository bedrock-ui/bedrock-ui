import { Flex, Heading } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const INSTALL_CODE = `
(npm|yarn|pnpm) install @bedrock-ui/core
`.trim();

function GettingStartedInstall() {
  return (
    <DocSection name="Core">
      <Flex my={8}>
        <Heading level={5}>Install</Heading>
      </Flex>

      <CodeHighlight>{INSTALL_CODE}</CodeHighlight>
    </DocSection>
  );
}

export default GettingStartedInstall;
