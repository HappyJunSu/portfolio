/** @type {import('next').NextConfig} */
const nextConfig = {
  //experimental: {
  //  appDir: true,
  //},
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
}

module.exports = nextConfig
