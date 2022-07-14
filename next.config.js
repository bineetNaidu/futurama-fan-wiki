/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vignette.wikia.nocookie.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
