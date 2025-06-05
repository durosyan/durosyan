// https://nextjs.org/docs/api-reference/next.config.js/introduction

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images: { unoptimized: true },
    basePath: isProd ? "/durosyan" : "",
    assetPrefix: isProd ? "/durosyan/" : "",
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