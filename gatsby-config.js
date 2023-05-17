/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `42n9u5h636wy`,
        accessToken: `zvkVa7grZz3HCjbbNU64EKj0MJmHMTqmngcBrTzLSzU`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-background-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
