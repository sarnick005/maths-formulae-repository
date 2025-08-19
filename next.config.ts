/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  // This ensures static assets are properly served
  distDir: ".next",
};

module.exports = nextConfig;
