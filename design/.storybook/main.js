import path from 'path';

const config = {
    framework: '@storybook/react-webpack5',
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../../app/src/**/*.stories.@(ts|tsx)'
    ],
    async webpackFinal(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../../app/src')
        };

        return config;
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-themes'
    ],
    docs: {
        autodocs: 'tag'
    },
    typescript: {
        check: false
    }
    // staticDirs: ['../public']
};
export default config;
