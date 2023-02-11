module.exports = {
  siteUrl: "https://www.frontendzone.com",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    "/api",
    "/dashboard",
    "/admin",
    "/admin/*",
    "/dashboard/*",
    "/payment",
    "/server-sitemap.xml",
    "/resetpassword",
    "/logout",
    "/blog/category/uncategorized",
  ],

  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },

      {
        userAgent: "*",
        disallow: ["/api/*", "/dashboard/*", "/admin/*"],
      },
    ],
    additionalSitemaps: [`${process.env.APP_URL}/server-sitemap.xml`],
  },
};
