const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProduction ? '/bedrock-ui/' : '',
  basePath: isProduction ? '/bedrock-ui/' : '',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
