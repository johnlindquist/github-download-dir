const nextConfig = {
  async redirects() {
    return [
      {
        source: `/:query(wesbos)*`,
        destination: "/api/git/:query*",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

//test: http://localhost:3001/wesbos/beginner-javascript/tree/master/exercises
