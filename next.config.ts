import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder SVGs (logo, hero images) live under /public until real photos are added.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
