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

//test: http://localhost:3001/api/git/wesbos/beginner-javascript/tree/master/exercises
