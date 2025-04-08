/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
}

module.exports = nextConfig 