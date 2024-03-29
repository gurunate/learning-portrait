import path, { dirname, join } from 'path';

const config = {
    framework: {
        name: getAbsolutePath('@storybook/nextjs'),
        options: {}
    },
    stories: [
        '../stories/**/*.mdx',
        '../../app/src/stories/**/*.mdx',
        '../../app/src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
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
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-interactions'),
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-themes'),
        getAbsolutePath('@storybook/addon-mdx-gfm')
    ],
    docs: {
        autodocs: 'tag'
    },
    typescript: {
        check: false
    },
    staticDirs: ['../public', '../../app/public']
};
export default config;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
