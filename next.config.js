/** @type {import('next').NextConfig} */
const { ASSET_PREFIX } = process.env;
const nextConfig = {
  assetPrefix: ASSET_PREFIX,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
