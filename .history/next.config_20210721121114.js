/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/:slug(\\(\\?<!^\\/api\\/git\\).\\*)*`,
        destination: `/api/git/:slug*`,
      },
    ]
    // http://localhost:3000/wesbos/beginner-javascript/tree/master/exercises
  },
}

module.exports = nextConfig
