import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../../app/src/components/theme-registry/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            theme
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline
    })
];

export default preview;
