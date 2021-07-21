/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: `/:slug(\\(\\?!^\/api\/git\\).\\*)*`,
        destination: `/api/git/:slug*`,
        permanent: true,
      },
    ]
    // http://localhost:3000/wesbos/beginner-javascript/tree/master/exercises
  },
}

module.exports = nextConfig
