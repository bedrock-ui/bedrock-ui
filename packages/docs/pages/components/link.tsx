import { Grid, Flex, Heading, Link } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Link } from '@bedrock-ui/core';
`.trim();

const LINK_CODE = `
<Link href="#">Lorem ipsum</Link>
`;

const LINK_UNDERLINE_CODE = `
<Link href="#" underline="underline">Lorem ipsum</Link>
`;

function ComponentsLink() {
  return (
    <DocSection name="Link">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid gap={4} style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{LINK_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Link href="#">Lorem ipsum</Link>
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid gap={4} style={{ marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Underline</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{LINK_UNDERLINE_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex>
            <Link href="#" underline="underline">
              Lorem ipsum
            </Link>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsLink;
