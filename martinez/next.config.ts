import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  basePath: '/martinez',
  images: {
    unoptimized: true,
  }
};
module.exports = nextConfig;
