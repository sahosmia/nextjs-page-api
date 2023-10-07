/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig
