import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: '/tools/badges',
        destination: '/tools/github-badges',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
