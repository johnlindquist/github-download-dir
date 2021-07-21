const nextConfig = {
  async redirects() {
    return [
      {
        destination: "/api/git/:slug",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
