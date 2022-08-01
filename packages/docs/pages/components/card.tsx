import { Card, Flex, Heading, Grid, Text } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Card } from '@bedrock-ui/core';
`.trim();

const CARD_CODE = `
<Card>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </Text>
</Card>
`.trim();

const NO_PADDING_CODE = `
<Card noPadding>
  <Image />
  
  <Flex p={3}>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </Text>
  </Flex>
</Card>
`.trim();

function ComponentsCard() {
  return (
    <DocSection name="Card">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{CARD_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex
            justifyContent="center"
            py={16}
            style={{
              backgroundColor: 'var(--color-neutral-100)',
              width: '100%',
            }}
          >
            <Card style={{ maxWidth: 320 }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </Card>
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>No Padding</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{NO_PADDING_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex
            justifyContent="center"
            py={16}
            style={{
              backgroundColor: 'var(--color-neutral-100)',
              width: '100%',
            }}
          >
            <Card noPadding style={{ overflow: 'hidden', maxWidth: 320 }}>
              <img
                width="100%"
                src="https://images.unsplash.com/photo-1650198147183-4a802821f1ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              />
              <Flex p={3}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsCard;
