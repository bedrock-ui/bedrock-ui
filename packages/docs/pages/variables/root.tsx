import { useEffect, useState } from 'react';
import { Flex, Text } from '@bedrock-ui/core';
import { DocSection } from 'components/DocSection';
import { getRootVariables } from 'utils/getRootVariables';

import type { VariablePair } from 'utils/getRootVariables';

function VariablesRoot() {
  const [rootVariables, setRootVariables] = useState<VariablePair[]>([]);

  useEffect(() => {
    setRootVariables(getRootVariables());
  }, []);

  if (rootVariables.length === 0) {
    return null;
  }

  return (
    <DocSection name="Root Variables">
      <Flex mb={8}>
        <Text>
          These are all the global CSS variables that Bedrock UI provides. They primarily serve as
          the basis of the theme colors, and while these variables and the variables specific to
          components can all be overwritten, we recommend sticking to this general structure.
        </Text>
      </Flex>

      {rootVariables.map(({ variable, value }, index) => (
        <Flex key={index} my={1}>
          <Text>
            {variable}: {value}
          </Text>
        </Flex>
      ))}
    </DocSection>
  );
}

export default VariablesRoot;
