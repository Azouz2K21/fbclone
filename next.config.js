/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],

  },
  experimental: {
    appDir: true,
    jit: true
  },
}

module.exports = nextConfig
