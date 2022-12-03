import { Heading, Spacing, Text } from '@bedrock-ui/core';
import { DocSection } from 'components/DocSection';

function Overview() {
  return (
    <DocSection name="Overview">
      <Text>
        Bedrock UI is a foundational UI library that is best used as a base for building out a
        design system. It supplies minimal components with sensible defaults and easy overrides with
        CSS variables. Bedrock UI is generally unopinionated, and intentionally simple. Bedrock UI
        provides, as the name suggests, a UI bedrock to build applications with whatever style you
        can dream of.
      </Text>

      <Spacing h={16} />

      <Heading level={3}>Consistent Spacing</Heading>

      <Spacing h={6} />

      <Text>
        Bedrock UI is built with consistent spacing in mind. The basis of this spacing is the global
        CSS variable "--spacing". By default this variable is set to 4, meaning that the height of
        all components, white space, line heights, font sizes, and more will be fixed to a multiple
        of 4px.
      </Text>

      <Spacing h={16} />

      <Heading level={3}>Size Matters</Heading>

      <Spacing h={6} />

      <Text style={{ marginBottom: 24 }}>
        Bedrock UI is intentionally slim, only providing the most fundamental components to build an
        application. As a result, this library has an incredibly small footprint, and this will
        always be a top priority. This library does not make decisions about style systems to use
        like Emotion, Styled Components, or others. It sticks to the fundamentals of web
        programming: simple React components and CSS.
      </Text>
    </DocSection>
  );
}

export default Overview;
