import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages.
  output: "export",
  // Next.js "Cache Components" HANGS every React-rendered route on
  // Cloudflare Workers -- must stay off. (AGENTS.md hard lesson)
  cacheComponents: false,
  // Trailing-slash canonicals: every route exports as /path/index.html
  trailingSlash: true,
  images: {
    // Required for `output: 'export'` -- no Image Optimization server.
    unoptimized: true,
  },
  // Tailwind v4 + Turbopack: without this rule the build emits ZERO
  // utilities (site renders unstyled). Verified post-build via grep.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
