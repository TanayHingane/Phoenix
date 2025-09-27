import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.jsdelivr.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // Add the domain for your image URLs
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/image-sitemap.xml",
        destination: "/image-sitemap",
      },
    ];
  },
};

export default nextConfig;
