import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.jsdelivr.net"],
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
