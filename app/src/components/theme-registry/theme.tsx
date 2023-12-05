import { createTheme } from '@mui/material/styles';

const BORDER_RADIUS = 12;

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#008DC4',
            main: '#006B96',
            dark: '#005273'
        },
        secondary: {
            light: '#D48019',
            main: '#F7941D',
            dark: '#59360B'
        },
        error: {
            // light: '#EF5350',
            // main: '#F75151'
            main: '#D44646'
            // dark: '#C62828'
        }
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
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px'
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
            fontWeight: 500,
            fontStyle: 'normal'
        },
        subtitle1: {
            fontSize: 16
        },
        subtitle2: {
            fontSize: 14
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    borderColor: '#DCDBDD',
                    borderRadius: BORDER_RADIUS
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#3C5255'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS
                }
            }
        }
    }
});

export default theme;
