import React from 'react';
import { Button, Flex, Heading } from '@bedrock-ui/core';

function Home() {
  return (
    <Flex flexDirection="column">
      <Heading level={1}>Hello World</Heading>
      <Button>Click me</Button>
    </Flex>
  );
}

export default Home;
