import { useRouter } from 'next/router';
import { useBreakpoints } from '@bedrock-ui/breakpoints';
import { Button, Flex, Grid, Heading, Text } from '@bedrock-ui/core';
import { IconLicense, IconSettings, IconRocket } from '@tabler/icons';
import styles from './Landing.module.css';

function Landing() {
  const router = useRouter();
  const { sx } = useBreakpoints();

  console.log(sx({ mobile: 12, tablet: 4, desktop: 4 }));

  return (
    <Flex className={styles.page} flexDirection="column">
      <Flex justifyContent="center">
        <Heading className={styles.heading} level={1}>
          Bedrock UI
        </Heading>
      </Flex>

      <Flex justifyContent="center">
        <Text className={styles.subheading}>A bedrock for building design systems</Text>
      </Flex>

      <Flex className={styles.actions} justifyContent="center">
        <Button onClick={() => router.push('/getting-started/overview')}>Get Started</Button>
        <Button onClick={() => router.push('/components/alert')} variant="outlined">
          Browse Components
        </Button>
      </Flex>

      <Grid className={styles.highlights}>
        <Grid.Col span={sx({ mobile: 12, tablet: 4, desktop: 4 })}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconRocket size={64} style={{ marginBottom: 16 }} />
            </Flex>

            <Flex justifyContent="center">
              <Text>Fast. 3kb gzipped + 5kb gzipped CSS</Text>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={sx({ mobile: 12, tablet: 4, desktop: 4 })}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconLicense size={64} style={{ marginBottom: 16 }} />
            </Flex>

            <Flex justifyContent="center">
              <Text>Open source and MIT licensed</Text>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={sx({ mobile: 12, tablet: 4, desktop: 4 })}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconSettings size={64} style={{ marginBottom: 16 }} />
            </Flex>

            <Flex justifyContent="center">
              <Text>Written with Typescript and Sass. Works with SSR.</Text>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default Landing;
