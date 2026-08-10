import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['pg'],
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
