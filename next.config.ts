import type { NextConfig } from "next";

const isGHPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = isGHPages ? "/nam" : "";

const nextConfig: NextConfig = {
  ...(isGHPages && { output: "export" }),
  ...(basePath && { basePath }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    ...(isGHPages && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vgbujcuwptvheqijyjbe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
