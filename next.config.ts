import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // Adjust this experimental flag based on actual Next.js experimental features
  },
};

export default nextConfig;
