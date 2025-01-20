// https://nextjs.org/docs/api-reference/next.config.js/introduction

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images: { unoptimized: true },
    basePath: isProd ? "/plausible-denial" : "",
    assetPrefix: isProd ? "/plausible-denial/" : "",
    output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;