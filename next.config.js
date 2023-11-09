/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
    reactStrictMode: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/bumbsgallery.appspot.com/o/**',
          },
        ],
      },
}

module.exports = nextConfig
