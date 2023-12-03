import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#008DC4',
            main: '#006B96',
            dark: '#005273'
        },
        secondary: {
            //     light: '#BA68C8',
            main: '#F7941D'
            //     dark: '#7B1FA2'
        }
        // error: {
        //     light: '#EF5350',
        //     main: '#D32F2F',
        //     dark: '#C62828'
        // },
        // warning: {
        //     light: '#FF9800',
        //     main: '#ED6C02',
        //     dark: '#C24400'
        // },
        // info: {
        //     light: '#03A9F4',
        //     main: '#0288D1',
        //     dark: '#01579B'
        // },
        // success: {
        //     light: '#4CAF50',
        //     main: '#2E7D32',
        //     dark: '#1B5E20'
        // },
    },
    typography: {
        fontFamily: ['"Poppins"', 'sans-serif'].join(','),
        fontSize: 14,
        htmlFontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        },
        button: {
            fontSize: 14,
            textTransform: 'none'
        },
        h1: {
            fontSize: 48,
            fontWeight: 600,
            fontStyle: 'normal'
        },
        h2: {
            fontSize: 36,
            fontWeight: 500
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
            fontStyle: 'normal'
        },
        h4: {
            fontSize: 24,
            fontWeight: 800
        },
        h5: {
            fontSize: 18,
            textTransform: 'uppercase'
        },
        h6: {
            fontSize: 14,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: 16
            // color: baseTheme.palette.text.secondary
        },
        subtitle2: {
            fontSize: 14
            // color: baseTheme.palette.text.secondary
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    borderColor: '#DCDBDD',
                    borderRadius: 12
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        }
    }
});

export default theme;
