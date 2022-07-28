import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Flex } from '@bedrock-ui/core';

function Example() {
  return null;
}
`.trim();

function ComponentsFlex() {
  return (
    <ComponentDocumentation name="Flex">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsFlex;
