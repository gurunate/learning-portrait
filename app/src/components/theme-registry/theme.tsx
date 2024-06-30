import { darken, lighten } from '@mui/system';

import { createTheme } from '@mui/material/styles';

// Color schema from Figma
export const BORDER_RADIUS = 12;
const COLOR_0_SECONDARY = '#F7941D';
const COLOR_2_SUCCESS = '#009512';
const COLOR_3_ALERT = '#F75151';
const COLOR_ADDITIONAL_BLUE1 = '#23ADDE';
const COLOR_BACKGROUND = '#F4F7F7';
const COLOR_DARK_2 = '#47464A';
const COLOR_DARK_3 = '#84818A';
const COLOR_DARK_4 = '#ABA8B0';
const COLOR_DARK_5 = '#ECEAEE';
const COLOR_LIGHT_LP_2 = '#8DA97E';
const COLOR_WHITE = '#FFFFFF';
const LINE_LINE1 = '#DCDBDD';
const LP_02_SECONDARY = '#3C5255';
const PRIMARY_LP = '#006B96';

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
            fontSize: 14,
            fontWeight: 400,
            fontStyle: 'normal'
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
                        color: '#2E7D32'
                    },
                    [`&.MuiChip-filled.MuiChip-colorInfo`]: {
                        backgroundColor: '#E0F6FF',
                        color: '#006C96'
                    },
                    [`&.MuiChip-filled.MuiChip-colorError`]: {
                        backgroundColor: '#FFE2E2',
                        color: '#BA1A1A'
                    },
                    [`&.MuiChip-filled.MuiChip-colorWarning`]: {
                        backgroundColor: '#FFEFBC',
                        color: '#191C1E'
                    },
                    [`&.MuiChip-outlined.MuiChip-colorSuccess`]: {
                        backgroundColor: 'none',
                        color: '#2E7D32',
                        border: '1px solid #2E7D32'
                    },
                    [`&.MuiChip-outlined.MuiChip-colorInfo`]: {
                        backgroundColor: 'none',
                        color: '#006C96',
                        border: '1px solid #1F6587'
                    },
                    [`&.MuiChip-outlined.MuiChip-colorError`]: {
                        backgroundColor: 'none',
                        color: '#BA1A1A',
                        border: '1px solid #BA1A1A'
                    },
                    [`&.MuiChip-outlined.MuiChip-colorWarning`]: {
                        backgroundColor: 'none',
                        color: '#191C1E',
                        border: '1px solid #F7951E'
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
                    borderRadius: BORDER_RADIUS
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
