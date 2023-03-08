module.exports = {
  siteMetadata: {
    title: `Gatsby Sourcing from YAML`,
    description: `Gatsby Source with YAML`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
  ],
}
