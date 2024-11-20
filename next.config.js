/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdljobsguru2.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
