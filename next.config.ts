import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // allow testing from local network (iPhone, other devices)
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.100:3000",
  ],
};

export default nextConfig;