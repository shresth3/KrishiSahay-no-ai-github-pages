import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/KrishiSahay-no-ai-github-pages" : ""
};
export default nextConfig;
