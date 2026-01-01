import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pairy-design-system',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
