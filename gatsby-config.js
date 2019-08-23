/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tutorial Gatsby',
    author: 'Christophe Maloungila',
    description: 'A tutorial using Gatsby.',
    siteUrl: 'https://cma/gatsby/',
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },{
    resolve: `gatsby-source-contentful`,
    options: {
      //spaceId: '8xqt2zs0cqs3',
      spaceId: process.env.CONTENTFUL_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      //accessToken :'hXgAGO9zNQ2N_gi7Sd6PmeiJaCRNVuQRCzu46eaX1MY'
    },
  },]
}
