/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    author: `Radomir Skrzepij`,
    authorUrl: `http://upco.re`,
    description: `Gatsby Progressive TypeScript starter. Build your own PWA Web Application in no time, using most demand nowadays tools like TypeScript, SASS and Tailwind.`,
    keywords: `gatsby, jamstack, front-end, javascript, gatsby starter`,
    social: {
      twitter: 'https://twitter.com/Zyziu10',
      github: 'https://github.com/skrzepij',
      facebook: 'https://www.facebook.com/skrzepij',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['YOUR-GTAG-UNIQUE-ID'],
        head: true,
      },
      gtagConfig: {
        anonymize_ip: false,
        cookie_expires: 0,
        send_page_view: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Progressive TypeScript',
        short_name: 'Gatsby PWA',
        start_url: '/',
        background_color: '#141000',
        theme_color: 'yellow',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/about/', '/contact/'],
      },
    },
  ],
}
