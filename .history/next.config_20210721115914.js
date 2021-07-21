/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: `/:slug\\(\\?!\/api\/git\\).\\*`,
        destination: `/api/git/:slug*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
