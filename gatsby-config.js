require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `Headless CMS portfolio website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`autoprefixer`)()
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon.png"
      }
    }
  ]
};