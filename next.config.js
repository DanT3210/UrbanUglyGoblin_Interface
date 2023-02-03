/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

//module.exports = nextConfig
module.exports = {
  nextConfig,
  images: {
    unoptimized: true,
  },
}

//module.exports = { nextConfig, images: {loader: "custom"}}
