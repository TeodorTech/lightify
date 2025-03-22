/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
