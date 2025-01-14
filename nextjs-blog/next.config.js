// https://nextjs.org/docs/api-reference/next.config.js/introduction
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  /* config options here */
  basePath: isProd ? "/plausible-denial" : "",
  assetPrefix: isProd ? "/plausible-denial/" : "",
  output: 'export'
};

export default nextConfig;
