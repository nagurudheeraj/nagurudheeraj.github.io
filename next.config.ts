import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io",
      "encrypted-tbn0.gstatic.com",
      "cdn.yellowmessenger.com",
    ],
  },
};

export default nextConfig;
