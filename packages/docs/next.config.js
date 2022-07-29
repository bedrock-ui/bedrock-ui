const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProduction
    ? {
        assetPrefix: '/bedrock-ui/',
        basePath: '/bedrock-ui/',
      }
    : {}),
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
