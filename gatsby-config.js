module.exports = {
    siteMetadata: {
        title: `Rideau`,
        description: `Rideau, your reliable blinds retailer. Offering innovative sun protection since 1980.`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `rideau`,
                short_name: `rideau`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#2A4264`,
                display: `minimal-ui`,
                icon: `src/images/rideau-logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/news/`,
                name: `news`,
            },
        },
        `gatsby-transformer-remark`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
