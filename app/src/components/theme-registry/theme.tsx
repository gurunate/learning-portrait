import { darken, lighten } from '@mui/system';

import { createTheme } from '@mui/material/styles';

// Color schema from Figma
const PRIMARY_LP = '#006B96';
const COLOR_BACKGROUND = '#f4f7f7';
const COLOR_3_ALERT = '#F75151';
const COLOR_LIGHT_LP_2 = '#8DA97E';
const COLOR_ADDITIONAL_BLUE1 = '#23ADDE';
const COLOR_0_SECONDARY = '#F7941D';
const COLOR_2_SUCCESS = '#009512';
const LINE_LINE1 = '#DCDBDD';
const LP_02_SECONDARY = '#3C5255';

const BORDER_RADIUS = 12;

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: COLOR_BACKGROUND
            // heading: COLOR_LIGHT_LP_2
        },
        primary: {
            light: lighten(PRIMARY_LP, 0.25),
            main: PRIMARY_LP,
            dark: darken(PRIMARY_LP, 0.25)
        },
        secondary: {
            light: lighten(COLOR_0_SECONDARY, 0.25),
            main: COLOR_0_SECONDARY,
            dark: darken(COLOR_0_SECONDARY, 0.25)
        },
        error: {
            light: lighten(COLOR_3_ALERT, 0.25),
            main: COLOR_3_ALERT,
            dark: darken(COLOR_3_ALERT, 0.25)
        },
        warning: {
            light: lighten(COLOR_0_SECONDARY, 0.25),
            main: COLOR_0_SECONDARY,
            dark: darken(COLOR_0_SECONDARY, 0.25)
        },
        info: {
            light: lighten(COLOR_ADDITIONAL_BLUE1, 0.25),
            main: COLOR_ADDITIONAL_BLUE1,
            dark: darken(COLOR_ADDITIONAL_BLUE1, 0.25)
        },
        success: {
            light: lighten(COLOR_2_SUCCESS, 0.25),
            main: COLOR_2_SUCCESS,
            dark: darken(COLOR_2_SUCCESS, 0.25)
        },
        // @ts-ignore
        edge: {
            main: LINE_LINE1
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
            },
            defaultProps: {
                elevation: 0
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    borderRadius: BORDER_RADIUS,
                    boxShadow: 'none'
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        },
        MuiSvgIcon: {
            defaultProps: {
                sx: {
                    fill: LP_02_SECONDARY
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
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS,
                    background: `var(--color-light-lp-2, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), ${COLOR_LIGHT_LP_2})`,
                    '& .MuiTableCell-root': {
                        border: 0
                    },
                    'th:first-child': {
                        borderRadius: '12px 0 0 12px'
                    },
                    'th:last-child': {
                        borderRadius: '0 12px 12px 0'
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    border: 0,
                    '& .MuiTableCell-root': {
                        borderBottom: `1px solid ${LINE_LINE1}`
                    }
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '& .Mui-selected': {
                        '& .MuiListItemIcon-root': {
                            '& .MuiSvgIcon-root': {
                                fill: PRIMARY_LP
                            }
                        }
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: 2
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '& .Mui-selected': {
                        borderRadius: BORDER_RADIUS,
                        fontWeight: 600
                    }
                }
            }
        }
    }
});

export default theme;
