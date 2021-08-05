module.exports = {
  siteMetadata: {
    description: "Trying out Gatsby for a simple portfolio",
    siteUrl: "https://www.yourdomain.tld",
    title: "My first Gatsby Page",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
