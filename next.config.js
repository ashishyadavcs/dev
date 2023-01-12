/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  images: {
    domains: [
      "static.tutorbin.com",
      "via.placeholder.com",
      "images.unsplash.com",
      "localhost",
      "tutorbin.com",
      "publicpagestutorbin.blob.core.windows.net",
      "ui-avatars.com",
      "mediatb.blob.core.windows.net",
      "images.pexels.com",
    ],
    // amp: {
    //   validator: "./apm-validator",
    // },
    // experimental: {
    //   amp: {
    //     skipValidation: true,
    //   },
    // },
  },
};

module.exports = nextConfig;
