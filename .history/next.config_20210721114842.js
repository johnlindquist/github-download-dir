/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: `*`,
        destination: `/api/git/*`,
      },
    ]
  },
}

module.exports = nextConfig
