import { darken, lighten } from '@mui/system';

import { createTheme } from '@mui/material/styles';

// Color schema from Figma
export const BORDER_RADIUS = 12;
const COLOR_0_WARNING = '#ED6C02';
const COLOR_0_SECONDARY = '#F7951E';
const COLOR_2_SUCCESS = '#2E7D32';
const COLOR_3_ALERT = '#BA1A1A';
const COLOR_ADDITIONAL_BLUE1 = '#0288D1';
const COLOR_BACKGROUND = '#FCFCFF';
const COLOR_DARK_2 = '#191C1E';
const COLOR_DARK_3 = '#71787E';
const COLOR_DARK_4 = '#B1BBBA';
const COLOR_DARK_5 = '#E7EAEC';
const COLOR_LIGHT_LP_2 = '#8DA97E';
const COLOR_WHITE = '#FFFFFF';
const LINE_LINE1 = '#B1BBBA';
const LP_02_SECONDARY = '#3C5255';
const PRIMARY_LP = '#006C96';

const theme = createTheme({
    palette: {
        mode: 'light',
        text: {
            // @ts-ignore
            light: COLOR_DARK_2
        },
        background: {
            default: COLOR_BACKGROUND,
            // @ts-ignore
            primary: PRIMARY_LP
            // heading: COLOR_LIGHT_LP_2
        },
        primary: {
            light: '#CDE7FD',
            main: PRIMARY_LP,
            dark: '#004D75'
        },
        secondary: {
            light: '#FADCD1',
            main: COLOR_0_SECONDARY,
            dark: '#E66C18'
        },
        error: {
            light: lighten(COLOR_3_ALERT, 0.25),
            main: COLOR_3_ALERT,
            dark: darken(COLOR_3_ALERT, 0.25)
        },
        warning: {
            light: '#FADCD1',
            main: COLOR_0_SECONDARY,
            dark: '#E66C18'
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
            light: COLOR_DARK_5,
            main: LINE_LINE1,
            dark: COLOR_DARK_3,
            darker: COLOR_DARK_4
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
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.5px'
        },
        body2: {
            fontSize: 14
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
            fontSize: 40,
            fontWeight: 500
        },
        h3: {
            fontSize: 33,
            fontWeight: 500,
            fontStyle: 'normal'
        },
        h4: {
            fontSize: 28,
            fontWeight: 800
        },
        h5: {
            fontSize: 23,
            textTransform: 'uppercase'
        },
        h6: {
            fontSize: 19,
            fontWeight: 500,
            fontStyle: 'normal'
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 700,
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 400,
            fontStyle: 'normal'
        },
        overline: {
            fontSize: 10,
            fontWeight: 400,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: 12,
            fontWeight: 400
        }
    },
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    border: 'none',
                    backgroundColor: COLOR_WHITE
                }
            }
        },
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
                    fontWeight: 500,
                    borderRadius: BORDER_RADIUS,
                    boxShadow: 'none'
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    [`&.MuiChip-filled.MuiChip-colorSuccess`]: {
                        backgroundColor: '#E1FFE7',
                        color: COLOR_2_SUCCESS
                    },
                    [`&.MuiChip-filled.MuiChip-colorInfo`]: {
                        backgroundColor: '#E0F6FF',
                        color: PRIMARY_LP
                    },
                    [`&.MuiChip-filled.MuiChip-colorError`]: {
                        backgroundColor: '#FFE2E2',
                        color: COLOR_3_ALERT
                    },
                    [`&.MuiChip-filled.MuiChip-colorWarning`]: {
                        backgroundColor: '#FFEFBC',
                        color: COLOR_DARK_2
                    },
                    [`&.MuiChip-outlined.MuiChip-colorSuccess`]: {
                        backgroundColor: 'none',
                        color: COLOR_2_SUCCESS,
                        borderWidth: '1px',
                        border: 'solid',
                        borderColor: COLOR_2_SUCCESS   
                    },
                    [`&.MuiChip-outlined.MuiChip-colorInfo`]: {
                        backgroundColor: 'none',
                        color: PRIMARY_LP,
                        borderWidth: '1px',
                        border: 'solid',
                        borderColor: PRIMARY_LP
                    },
                    [`&.MuiChip-outlined.MuiChip-colorError`]: {
                        backgroundColor: 'none',
                        color: COLOR_3_ALERT,
                        borderWidth: '1px',
                        border: 'solid',
                        borderColor: COLOR_3_ALERT
                    },
                    [`&.MuiChip-outlined.MuiChip-colorWarning`]: {
                        backgroundColor: 'none',
                        color: COLOR_DARK_2,
                        borderWidth: '1px',
                        border: 'solid',
                        borderColor: COLOR_0_SECONDARY
                    }
                },
            },
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
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: COLOR_WHITE
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
                    borderRadius: '4px'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    background: `var(--color-light-lp-2, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), ${COLOR_LIGHT_LP_2})`,
                    '& .MuiTableCell-root': {
                        background: `var(--color-light-lp-2, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), ${COLOR_LIGHT_LP_2})`,
                        border: 0
                    },
                    'th:first-child': {
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8
                    },
                    'th:last-child': {
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8
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
                    borderRadius: BORDER_RADIUS,
                    '&.Mui-selected': {
                        fontWeight: 600
                    }
                }
            }
        }
    }
});

export default theme;
