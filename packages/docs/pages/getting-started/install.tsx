import { Heading, Link, Spacing } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const INSTALL_CODE = `
(npm|yarn|pnpm) install @bedrock-ui/core
`.trim();

function GettingStartedInstall() {
  return (
    <DocSection name="Core">
      <Spacing h={8} />

      <Heading level={5}>Install</Heading>

      <Spacing h={8} />

      <CodeHighlight>{INSTALL_CODE}</CodeHighlight>

      <Spacing h={8} />

      <Heading level={5}>NextJS</Heading>

      <Spacing h={4} />

      <Link href="https://github.com/bedrock-ui/bedrock-ui/tree/main/packages/examples/nextjs">
        Code Example
      </Link>

      <Spacing h={8} />

      <Heading level={5}>Create React App</Heading>

      <Spacing h={4} />

      <Link href="https://github.com/bedrock-ui/bedrock-ui/tree/main/packages/examples/create-react-app">
        Code Example
      </Link>
    </DocSection>
  );
}

export default GettingStartedInstall;
