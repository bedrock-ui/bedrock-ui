import { Link, Text } from '@bedrock-ui/core';
import { BlogArticle } from 'components/BlogArticle';

function Blog() {
  return (
    <BlogArticle title="Blog">
      <Link href="/blog/reducing-bundle-size">
        Reducing Bundle Size and Load Time With Bedrock UI
      </Link>

      <Text>A case study in refactoring a website built with Material UI to use Bedrock UI</Text>
    </BlogArticle>
  );
}

export default Blog;
