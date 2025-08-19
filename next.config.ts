/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {},
  },
  distDir: ".next", 
};

module.exports = nextConfig;
