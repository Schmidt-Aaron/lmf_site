require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Light My Fire of Puget Sound`,
    description: `Light My Fire is a Puget Sound charity devoted to helping families recover from catastrophic fire damage`,
    siteUrl: `https://lmfps.org`, // needed for sitemap
    googleVerification: `PfmmbcIvVYhidSZL3yKTkWF_xQwXyXXjM4wRL5KI9GI`,
    bingVerification: "338AACFD54E4B7A4CBE19B9AB049FAD9",
    author: `Aaron Schmidt`,
    authorSite: `https://aaronms.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131110014-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Light My Fire of Puget Sound`, //TODO pull data into separate file
        short_name: `Light My Fire`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff6d70`,
        display: `standalone`,
        icon: `static/lmf-icon-512x512.png` // This path is relative to the root of the site
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://lmfps.org`
      }
    }
  ]
};
