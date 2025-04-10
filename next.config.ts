// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['imgd.aeplcdn.com', 'source.unsplash.com'], // Add all the domains your car images use
  },
};

export default nextConfig;
