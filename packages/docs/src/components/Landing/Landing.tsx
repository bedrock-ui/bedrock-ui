import { useRouter } from 'next/router';
import { Button, Flex, Heading, Text } from '@bedrock-ui/core';
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
    </Flex>
  );
}

export default Landing;
