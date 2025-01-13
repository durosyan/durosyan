import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/plausible-denial" : "",
  assetPrefix: isProd ? "/plausible-denial/" : "",
  output: 'export'
};

export default nextConfig;
