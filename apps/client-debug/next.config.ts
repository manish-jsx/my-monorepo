import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  output: 'export',
  images: {
    unoptimized: true, 
    domains: ['via.placeholder.com'], // Add other domains as needed
  },
};

export default nextConfig;
