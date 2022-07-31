import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Flex } from '@bedrock-ui/core';
`.trim();

function ComponentsFlex() {
  return (
    <DocSection name="Flex">
      <CodeHighlight>{CODE}</CodeHighlight>
    </DocSection>
  );
}

export default ComponentsFlex;
