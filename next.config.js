/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'github.com', 'githubusercontent.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
