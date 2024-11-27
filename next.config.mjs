/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS hosts
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP hosts
      },
    ],
    unoptimized: true, // Disable strict optimization checks if necessary
  },
  reactStrictMode: true,
}

export default nextConfig
