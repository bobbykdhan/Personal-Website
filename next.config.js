/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Ensure static files are properly handled
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig 