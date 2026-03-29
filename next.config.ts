import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGitHubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isGitHubActions,
  },
  ...(isGitHubActions
    ? {
        output: "export",
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
