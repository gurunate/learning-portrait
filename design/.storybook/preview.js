import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import theme from '../../app/src/components/theme-registry/theme';

// addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

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

export default preview;
