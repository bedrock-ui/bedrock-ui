import { useState } from 'react';
import { Grid, Heading, Tabs } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Tabs } from '@bedrock-ui/core';
`.trim();

const TABS_CODE = `
<Tabs>
  <Tabs.Tab active={active === 0} onClick={() => setActive(0)}>
    Lorem ipsum
  </Tabs.Tab>

  <Tabs.Tab active={active === 1} onClick={() => setActive(1)}>
    dolor sit amet
  </Tabs.Tab>

  <Tabs.Tab active={active === 2} onClick={() => setActive(2)}>
    consectetur adipiscing elit
  </Tabs.Tab>
</Tabs>
`.trim();

function ComponentsTabs() {
  const [active, setActive] = useState<number>(0);

  return (
    <DocSection name="Tabs">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TABS_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Tabs>
            <Tabs.Tab active={active === 0} onClick={() => setActive(0)}>
              Lorem ipsum
            </Tabs.Tab>

            <Tabs.Tab active={active === 1} onClick={() => setActive(1)}>
              dolor sit amet
            </Tabs.Tab>

            <Tabs.Tab active={active === 2} onClick={() => setActive(2)}>
              consectetur adipiscing elit
            </Tabs.Tab>
          </Tabs>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsTabs;
