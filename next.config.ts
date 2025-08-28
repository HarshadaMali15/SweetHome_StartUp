import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sweet-home-start-up.vercel.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
