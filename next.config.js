/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redicts() {
    return [
      {
        source: '/',
        destination: '/cardapio',
        permanet: false
      },
    ]
  }
}


module.exports = nextConfig
