/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: '2T Kasm Registry',
    description: 'Workspace Registry for SSOC Kasm Instances',
    icon: '/img/logo.svg',
    listUrl: 'https://jclark2t.github.io/kasm-registry/',
    contactUrl: 'https://github.com/JClark2T/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
