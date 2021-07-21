const nextConfig = {
  async redirects() {
    return [
      {
        source: `/*`,
        destination: "/api/git/*",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
