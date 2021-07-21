const nextConfig = {
  async redirects() {
    return [
      {
        source: `/:query*`,
        destination: "/api/git/:query*",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
