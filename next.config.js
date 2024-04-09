/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  images: {
    domains: [
      "media.licdn.com",
      "cms.frontendzone.com",
      "static.tutorbin.com",
      "via.placeholder.com",
      "images.unsplash.com",
      "localhost",
      "tutorbin.com",
      "media.istockphoto.com",
      "publicpagestutorbin.blob.core.windows.net",
      "ui-avatars.com",
      "mediatb.blob.core.windows.net",
      "images.pexels.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/tools/online-json-formatter",
        destination: "/online-json-formatter",
      }
    ];
  },
  async redirects() {
    return [
      {
        source:"/portfolio",
        destination:"/ashish-yadav",
        permanent: false,
      },
      {
        source:"/calculator/attendance",
        destination:"/calculator/attendance-percentage-calculator",
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
