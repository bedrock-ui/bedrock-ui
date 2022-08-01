import { Flex, Link, List, Text } from '@bedrock-ui/core';
import { DocSection } from 'components/DocSection';

function IconsLibraries() {
  return (
    <DocSection name="Icon Libraries">
      <Text>
        Bedrock UI does not ship any icons. There are plenty of open source icon libraries to choose
        from! Here are a few:
      </Text>

      <Flex my={8}>
        <List>
          <List.Item>
            <Link href="https://fontawesome.com/icons">Font Awesome</Link>
          </List.Item>
          <List.Item>
            <Link href="https://tabler-icons.io/">Tabler</Link>
          </List.Item>
        </List>
      </Flex>
    </DocSection>
  );
}

export default IconsLibraries;
