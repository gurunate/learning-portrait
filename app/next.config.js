/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.module.rules?.push({
            test: /\\.stories\\.(tsx|ts|js|jsx)$/,
            loader: 'ignore-loader'
        });
        return config;
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
