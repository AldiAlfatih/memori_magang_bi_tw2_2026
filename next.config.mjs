/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['vm-71w0itm67f5e1x2asdklzsel.vusercontent.net'],
}

export default nextConfig
