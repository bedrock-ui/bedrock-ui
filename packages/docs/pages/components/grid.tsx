import { Flex, Grid } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Grid } from '@bedrock-ui/core';
`.trim();

const GRID_CODE = `
<Grid>
  <Grid.Col span={4}>Grid Item 1</Grid.Col>
  <Grid.Col span={4}>Grid Item 2</Grid.Col>
  <Grid.Col span={4}>Grid Item 3</Grid.Col>

  <Grid.Col span={2}>Grid Item 4</Grid.Col>
  <Grid.Col span={2}>Grid Item 5</Grid.Col>
  <Grid.Col span={2}>Grid Item 6</Grid.Col>
  <Grid.Col span={2}>Grid Item 7</Grid.Col>
  <Grid.Col span={2}>Grid Item 8</Grid.Col>
  <Grid.Col span={2}>Grid Item 9</Grid.Col>
  
  <Grid.Col span={12}>Grid Item 10</Grid.Col>
</Grid>
`.trim();

function ComponentsGrid() {
  return (
    <DocSection name="Grid">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <CodeHighlight>{GRID_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={4}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 1
              </Flex>
            </Grid.Col>

            <Grid.Col span={4}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 2
              </Flex>
            </Grid.Col>

            <Grid.Col span={4}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 3
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 4
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 5
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 6
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 7
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 8
              </Flex>
            </Grid.Col>

            <Grid.Col span={2}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 9
              </Flex>
            </Grid.Col>

            <Grid.Col span={12}>
              <Flex style={{ backgroundColor: 'var(--color-neutral-200)', padding: 16 }}>
                Grid Item 10
              </Flex>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsGrid;
