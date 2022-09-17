import { useRouter } from 'next/router';
import { Button, Box, Flex, Grid, Heading, Text } from '@bedrock-ui/core';
import { IconLicense, IconSettings, IconRocket } from '@tabler/icons';
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
        <Button onClick={() => router.push('/components/alert')} variant="outlined">
          Browse Components
        </Button>
      </Flex>

      <Grid className={styles.highlights}>
        <Grid.Col span={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <Box className={styles.iconContainer}>
                <IconRocket size={32} stroke={1.5} />
              </Box>
            </Flex>

            <Flex justifyContent="center">
              <Heading level={6}>Fast. 3kb gzipped + 5kb gzipped CSS</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <Box className={styles.iconContainer}>
                <IconLicense size={32} stroke={1.5} />
              </Box>
            </Flex>

            <Flex justifyContent="center">
              <Heading level={6}>Open source and MIT licensed</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <Flex flexDirection="column">
            <Flex justifyContent="center">
              <Box className={styles.iconContainer}>
                <IconSettings size={32} stroke={1.5} />
              </Box>
            </Flex>

            <Flex justifyContent="center">
              <Heading level={6}>Typescript and Sass. Works with SSR.</Heading>
            </Flex>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <Flex justifyContent="center" mt={16}>
            <Button onClick={() => router.push('/blog')} variant="outlined">
              Visit Blog
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default Landing;
