import { Grid, Link } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Link } from '@bedrock-ui/core';
`.trim();

const LINK_CODE = `
<Link href="#">Lorem ipsum</Link>
`;

function ComponentsLink() {
  return (
    <ComponentDocumentation name="Link">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{LINK_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Link href="#">Lorem ipsum</Link>
        </Grid.Col>
      </Grid>
    </ComponentDocumentation>
  );
}

export default ComponentsLink;
