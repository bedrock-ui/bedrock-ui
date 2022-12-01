import { useRouter } from 'next/router';
import { Button, Flex, Grid, Heading, Spacing, Text } from '@bedrock-ui/core';
import { IconLicense, IconSettings, IconRocket, IconMoon } from '@tabler/icons';
import styles from './Landing.module.css';

function Landing() {
  const router = useRouter();

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
        <Button color="neutral" onClick={() => router.push('/components/alert')}>
          Browse Components
        </Button>
      </Flex>

      <Grid className={styles.highlights}>
        <Grid.Col span={{ mobile: 12, tablet: 6, desktop: 3 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconRocket size={80} stroke={1} />
            </Flex>

            <Spacing h={4} />

            <Flex justifyContent="center">
              <Heading level={5}>Fast. 3kb gzipped + 5kb gzipped CSS</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 6, desktop: 3 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconLicense size={80} stroke={1} />
            </Flex>

            <Spacing h={4} />

            <Flex justifyContent="center">
              <Heading level={5}>Open source and MIT licensed</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 6, desktop: 3 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconMoon size={80} stroke={1} />
            </Flex>

            <Spacing h={4} />

            <Flex justifyContent="center">
              <Heading level={5}>Dark Mode Support</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 6, desktop: 3 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <IconSettings size={80} stroke={1} />
            </Flex>

            <Spacing h={4} />

            <Flex justifyContent="center">
              <Heading level={5}>Typescript and Sass. Works with SSR.</Heading>
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default Landing;
