import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Heading } from '@bedrock-ui/core';
`.trim();

function ComponentsHeading() {
  return (
    <ComponentDocumentation name="Heading">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsHeading;
