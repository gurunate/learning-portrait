/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.module.rules?.push({
            test: /\\.stories\\.(tsx|ts|js|jsx)$/,
            loader: 'ignore-loader'
        });
        return config;
    }
};

module.exports = nextConfig;
