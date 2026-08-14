import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the portfolio dependency-light and let Next.js 16 use its
  // production Turbopack defaults without extra compiler configuration.
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
