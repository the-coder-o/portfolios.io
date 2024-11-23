/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '',
  assetPrefix: '',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

export default nextConfig
