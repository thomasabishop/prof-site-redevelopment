module.exports = {
  siteMetadata: {
    title: `Thomas Bishop`,
    titleTemplate: `%s | Thomas Bishop Web Developer`,
    description: `Frontend web developer based near Brighton, UK. I build websites and applications using modern JS, Typescript, and React.`,
    url: 'https://thomas-bishop.co.uk',
    image: '/img/site-image.svg',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-anchor-links',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-rehype`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/templates/PostTemplate.jsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        //mdxOtherwiseConfigured: true,
        plugins: [`gatsby-remark-images`],
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/img`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Bishop Web Developer`,
        short_name: `Thomas Bishop`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#3880ff`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
