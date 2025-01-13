import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/FeasableDenial" : "",
  assetPrefix: isProd ? "/FeasableDenial/" : "",
  output: 'export'
};

export default nextConfig;
