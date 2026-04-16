import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // REMOVIDO /martinez: Para sites .github.io, o caminho base deve ser vazio
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;