/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require('dotenv');
dotenv.config();

const { githubApiQuery } = require('./src/services/github-api')

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
  
        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,
  
        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      }
    }
  ],
}
