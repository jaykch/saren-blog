module.exports = {
  siteMetadata: {
    title: 'Saren.io | Blog',
    siteUrl: 'https://blog.saren.io',
    menuLinks:[
      {
        name: 'HOME',
        link:'/'
      },
      {
        name:'TAGS',
        link:'/tags'
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'saren.io-blog',
        short_name: 'Blog',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#0a0a0a',
        display: 'minimal-ui',
        icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
  ],
}
