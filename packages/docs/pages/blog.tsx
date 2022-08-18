import NextLink from 'next/link';
import { Link, Text } from '@bedrock-ui/core';
import { BlogArticle } from 'components/BlogArticle';

function Blog() {
  return (
    <BlogArticle title="Blog">
      <NextLink href="/blog/reducing-bundle-size" passHref>
        <Link>Reducing Bundle Size and Load Time With Bedrock UI</Link>
      </NextLink>

      <Text>A case study in refactoring a website built with Material UI to use Bedrock UI</Text>
    </BlogArticle>
  );
}

export default Blog;
