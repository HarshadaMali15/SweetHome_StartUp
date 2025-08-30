import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: "https",
        hostname: "sweet-home-start-up.vercel.app",
=======
        protocol: "http",
        hostname: "localhost",
        port: "5000",
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
