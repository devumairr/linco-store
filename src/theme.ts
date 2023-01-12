import { createTheme } from '@mui/material'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1000,
            lg: 1200,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: 0,
                },
                sizeSmall: {
                    padding: '10px 20px',
                },
                sizeMedium: {
                    padding: '6px 26px',
                },
                sizeLarge: {
                    padding: '12px 34px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
                containedPrimary: {
                    borderRadius: '5px',
                    border: '2px solid #F48E08 ',
                },
                outlinedSecondary: {
                    borderRadius: '5px',
                    border: '2px solid #242F3C ',
                },
                contained: {
                    borderRadius: '5px',
                },
                outlined: {
                    borderRadius: '5px',
                    border: '2px solid #FFFFFF ',
                },
                text: {
                    padding: '0px ',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    minWidth: '18px',
                    '&.Mui-selected': {
                        backgroundColor: 'transparent !important',
                        fontWeight: 700,
                    },
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px',
                    },
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6',
                },
                subheaderTypographyProps: {
                    variant: 'body2',
                },
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    flexWrap: 'wrap',
                    display: 'flex',
                    gap: '10px',
                    paddingBottom: '20px',
                },
                indicator: {
                    background: 'none',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: '6px 15px',
                    fontWeight: 'bold',
                    color: '#000',
                    border: '1.5px solid #000',
                    borderRadius: '5px',
                    '&.Mui-selected': {
                        border: '1.5px solid #F48E08',
                        background: '#F48E08',
                        color: '#fff',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    border: '1.5px solid #fff',
                    borderRadius: '0px',
                    background: 'rgba(205, 226, 245, 0.1)',
                    '.MuiOutlinedInput-input ': {
                        minHeight: '30px !important',
                        fontSize: '22px',
                        '@media(max-width: 700px)': {
                            fontSize: '15px',
                            minHeight: '22px !important',
                        },
                    },
                    '.Mui-focused': {
                        border: '1px solid #fff',
                        outline: 'none',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#212121',
                    },
                },
                colorSecondary: {
                    color: '#fff',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    top: 'auto',
                    position: 'sticky',
                    padding: '12px 0px',
                    backgroundColor: '#ECECEC',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F3F4F6',
                    '.MuiTableCell-root': {
                        color: '#374151',
                    },
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4,
                    },
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        borderBottom: '1px solid #EEEEEE',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0px !important',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: { color: '#000000' },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    width: '180px',
                    '@media(max-width: 1200px)': {
                        width: '140px',
                    },
                    '@media(max-width: 800px)': {
                        width: '130px',
                    },
                    '@media(max-width: 400px)': {
                        width: '125px',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#242F3C',
                    color: '#FCFBFB',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#242F3C',
                    opacity: 0.3,
                    boxShadow: '0px 10px 25px rgba(189, 189, 189, 0.12)',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: { padding: '0px', color: '#F48E08' },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: { color: '#242F3C !important', fontSize: '30px' },
                text: { fill: '#FCFBFB', fontWeight: 700 },
            },
        },
    },

    palette: {
        neutral: {
            100: '#9C9C9C',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)',
        },
        background: {
            default: '#F9FAFC',
            paper: '#ECECEC',
            grey: '#ECECEC',
            lightGrey: '#F3F3F4',
            light: '#FCFBFB',
            white: '#fff',
        },
        divider: '#E6E8F0',
        primary: {
            main: '#F48E08',
            light: '#f9b55b',
            dark: '#c16e01',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#242F3C',
            light: '#4e6074',
            dark: '#1b232d',
            contrastText: '#FFFFFF',
        },
        success: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#FFFFFF',
            contrastText: '#ECECEC',
        },
        info: {
            main: '#000000',
            light: '##000000',
            dark: '##000000',
            contrastText: '#FFFFFF',
        },
        warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
            contrastText: '#FFFFFF',
        },
        error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
            contrastText: '#FFFFFF',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
            disabled: 'rgba(55, 65, 81, 0.48)',
        },
    },
    shape: {
        borderRadius: '5px',
    },
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 4px 12px rgba(0, 0, 0, 0.08)',
        '0px 2px 20px rgba(0, 0, 0, 0.08)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 10px 25px rgba(189, 189, 189, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
    ],
    typography: {
        button: {
            fontWeight: 400,
        },
        fontFamily: `"Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
			 Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            '@media(max-width: 700px)': {
                fontSize: '0.75rem',
            },
        },
        body2: {
            fontSize: '0.938rem',
            fontWeight: 400,
            lineHeight: 1.57,
            '@media(max-width: 700px)': {
                fontSize: '0.5rem',
            },
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.75,
            '@media(max-width: 700px)': {
                fontSize: '0.75rem',
            },
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
        },
        h1: {
            fontWeight: 700,
            fontSize: '5.5rem',
            lineHeight: 1.375,
            '@media(max-width: 1400px)': {
                fontSize: '3.5rem',
            },
            '@media(max-width: 700px)': {
                fontSize: '1.8rem',
            },
        },
        h2: {
            fontWeight: 700,
            fontSize: '3.875rem',
            lineHeight: 1.375,
            '@media(max-width: 1200px)': {
                fontSize: '2.5rem',
            },
            '@media(max-width: 700px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.375,
            '@media(max-width: 800px)': {
                fontSize: '1.4rem',
            },
            '@media(max-width: 600px)': {
                fontSize: '1.3rem',
            },
            '@media(max-width: 500px)': {
                fontSize: '1rem',
            },
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.3rem',
            lineHeight: 1.375,
            '@media(max-width: 1200px)': {
                fontSize: '1rem',
            },
            '@media(max-width: 700px)': {
                fontSize: '0.8rem',
            },
            '@media(max-width: 600px)': {
                fontSize: '0.7rem',
            },
            '@media(max-width: 500px)': {
                fontSize: '0.6rem',
            },
        },
        h5: {
            fontWeight: 400,
            fontSize: '1.125rem',
            lineHeight: 1.375,
            '@media(max-width: 1200px)': {
                fontSize: '0.9rem',
            },
            '@media(max-width: 700px)': {
                fontSize: '0.75rem',
            },
        },
        h6: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.375,
            '@media(max-width: 700px)': {
                fontSize: '0.85rem',
            },
        },
    },
})
