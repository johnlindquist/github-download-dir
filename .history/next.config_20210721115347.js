/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: `/:slug(?<!^/api)*`,
        destination: `/api/git/:slug*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
