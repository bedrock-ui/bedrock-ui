import { Heading, Text } from '@bedrock-ui/core';
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

      <Heading level={3} style={{ marginTop: 64, marginBottom: 24 }}>
        Consistent Spacing
      </Heading>

      <Text>
        Bedrock UI is built with consistent spacing in mind. The basis of this spacing is the global
        CSS variable "--spacing". By default this variable is set to 4, meaning that the height of
        all components, white space, line heights, font sizes, and more will be fixed to a multiple
        of 4px.
      </Text>

      <Heading level={3} style={{ marginTop: 64, marginBottom: 24 }}>
        Size Matters
      </Heading>

      <Text style={{ marginBottom: 24 }}>
        Bedrock UI is intentionally slim, only providing the most fundamental components to build an
        application. As a result, this library has an incredibly small footprint, and this will
        always be a top priority. This library does not make decisions about style systems to use
        like Emotion, Styled Components, or others. It sticks to the fundamentals of web
        programming: simple React components and CSS.
      </Text>

      <Text>
        Bedrock UI is split into a "core" library, but it also includes other libraries such as
        "breakpoints", which provide common responsive functionality.
      </Text>
    </DocSection>
  );
}

export default Overview;
