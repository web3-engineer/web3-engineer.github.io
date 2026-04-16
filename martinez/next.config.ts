import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // O basePath deve ser exatamente o nome do seu repositório no GitHub
  basePath: '/martinez',
  // Garante que links como /vitrine virem /vitrine/ (melhor para o GitHub Pages)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;