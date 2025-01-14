// https://nextjs.org/docs/api-reference/next.config.js/introduction
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images: { unoptimized: true },
    basePath: isProd ? "/plausible-denial" : "",
    assetPrefix: isProd ? "/plausible-denial/" : "",
    output: 'export'
};

module.exports = nextConfig;