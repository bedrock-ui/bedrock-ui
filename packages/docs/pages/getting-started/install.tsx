import { Flex, Heading } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const INSTALL_CODE = `
(npm|yarn|pnpm) install @bedrock-ui/core
`.trim();

function BreakpointsInstall() {
  return (
    <DocSection name="Core">
      <Flex style={{ marginTop: 32, marginBottom: 32 }}>
        <Heading level={5}>Install</Heading>
      </Flex>

      <CodeHighlight>{INSTALL_CODE}</CodeHighlight>
    </DocSection>
  );
}

export default BreakpointsInstall;
