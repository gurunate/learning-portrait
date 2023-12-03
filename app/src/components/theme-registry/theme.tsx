import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            // light: '#42A5F5',
            main: '#006B96'
            // dark: '#1565C0'
        }
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
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        }
    }
});

export default theme;
