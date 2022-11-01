import NextImage from 'next/image';
import { Box, Button, Flex, Heading, Link, Table, Text } from '@bedrock-ui/core';
import { BlogArticle } from 'components/BlogArticle';
import localWeatherImage from '../../public/images/blog/local-weather.png';

function BlogReducingBundleSize() {
  return (
    <BlogArticle title="Reducing Bundle Size and Load Time With Bedrock UI">
      <Text>
        <p>
          One of the biggest differentiators between Bedrock UI and other UI libraries is it's size.
          Bedrock UI's Javascript bundle clocks in at around 3kb gzipped, and the CSS bundle is
          typically around 5kb gzipped.
        </p>
      </Text>

      <Link href="https://bundlephobia.com/package/@bedrock-ui/core@latest">Bundlephobia</Link>

      <Text>
        <p>
          To demonstrate the bundle size and render time savings, lets look at a website that was
          originally built with Material UI, and then re-written to use Bedrock UI. The website is a
          simple weather app that displays a 10 day forecast for a local area, along with some other
          information in a graphical format like cloud coverage and chance of precipitation. This
          website is open source and available on{' '}
          <Link href="https://github.com/matthewwolfe/local-weather">Github</Link> to play with.
        </p>
      </Text>

      <Text>
        <p>Here is a screenshot of the UI. It is a pretty straightforward single page app.</p>
      </Text>

      <NextImage alt="local weather image" src={localWeatherImage} />

      <Text>
        <p>
          And here are the performance metrics of Material UI vs Bedrock UI (Built with{' '}
          <Link href="https://nextjs.org/">NextJS</Link>):
        </p>
      </Text>

      <Box my={6}>
        <Heading level={3}>Material UI</Heading>
      </Box>

      <Table style={{ marginBottom: 32 }}>
        <thead>
          <tr>
            <th>UI Library</th>
            <th>Transferred (Gzip)</th>
            <th>Transferred</th>
            <th>Finish</th>
            <th>DOM Content Loaded</th>
            <th>Load</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Material UI</td>
            <td>195 kB</td>
            <td>569 kB</td>
            <td>806 ms</td>
            <td>382 ms</td>
            <td>383 ms</td>
          </tr>

          <tr>
            <td>Bedrock UI</td>
            <td>161 kB</td>
            <td>473 kB</td>
            <td>337 ms</td>
            <td>180 ms</td>
            <td>181 ms</td>
          </tr>

          <tr>
            <td></td>
            <td>34 kB smaller</td>
            <td>96 kB smaller</td>
            <td>469 ms faster</td>
            <td>202 ms faster</td>
            <td>202 ms faster</td>
          </tr>
        </tbody>
      </Table>

      <Text>
        <p>
          Bedrock UI delivers less Javascript and takes less time to render the application. Even
          considering the additional ~5kB of CSS, the download size and load time of Bedrock UI is a
          healthy boost over Material UI. When building applications for the web, size matters, and
          this example highlights that Bedrock UI can provide significant improvements in size and
          performance while still providing many of the same building blocks.
        </p>
      </Text>

      <Text>
        <p>
          We hope that Bedrock UI can grow to become another tool in the toolkit for developers
          building for the web. With many components and responsive breakpoints built in, we think
          that Bedrock UI is a competitive library for building great UIs. Bedrock UI will continue
          to grow and expand with new functionality, while maintaining its small footprint. We are
          committed to the growth of this library and hope it can continue to provide a lightweight,
          performant solution for building UIs.
        </p>
      </Text>
    </BlogArticle>
  );
}

export default BlogReducingBundleSize;
