/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['server.buniyadi.craftedsys.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
