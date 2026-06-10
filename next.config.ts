import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  turbopack: {
    root: "/home/aditya-gupta/Fullstack website/Briyani/frontend",
  },
};

export default nextConfig;
