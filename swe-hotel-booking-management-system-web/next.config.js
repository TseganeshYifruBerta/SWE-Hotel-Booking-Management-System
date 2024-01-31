/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        // hostname:"http"
      },
    ],
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "picsum.photos","localhost"],
  },
};

module.exports = {
  ...nextConfig,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};
