import { Grid, Hidden, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Hidden } from '@bedrock-ui/core';
`.trim();

const HIDDEN_CODE = `
<Hidden on={{mobile: false, tablet: true, desktop: false }}>
  Hidden on Tablet Breakpoint
</Hidden>
`.trim();

const BREAKPOINTS_CODE = `
$breakpoints: (
  'mobile': 0,
  'tablet': 600,
  'desktop': 1024,
);
`.trim();

function ComponentsLink() {
  return (
    <DocSection name="Hidden">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Text>
            This website is set with the following breakpoints, which should match the naming of the
            breakpoint values provided to the Hidden component:
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{BREAKPOINTS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{HIDDEN_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Hidden on={{ mobile: false, tablet: true, desktop: false }}>
            Hidden on Tablet Breakpoint
          </Hidden>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsLink;
