import { Flex, Link, List, Text } from '@bedrock-ui/core';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

function IconsLibraries() {
  return (
    <ComponentDocumentation name="Icon Libraries">
      <Text>
        Bedrock UI does not ship any icons. There are plenty of open source icon libraries to choose
        from! Here are a few:
      </Text>

      <Flex className="my-8">
        <List>
          <List.Item>
            <Link href="https://fontawesome.com/icons">Font Awesome</Link>
          </List.Item>
          <List.Item>
            <Link href="https://tabler-icons.io/">Tabler</Link>
          </List.Item>
        </List>
      </Flex>
    </ComponentDocumentation>
  );
}

export default IconsLibraries;
