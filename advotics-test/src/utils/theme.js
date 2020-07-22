import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#37B04C',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#F7F7F7',
        light: '#727272',
        contrastText: '#707070C4',
        dark: '#C5C5C5'
      },
      info: {
        main: '#6A6A6A',
        light: '#8B8B8B',
        dark: '#757575'
      },
      text: {
        primary: '#4D4F5C',
        disabled: '#000000DE',
        secondary: '#00000099',
      },
      action: {
        active: '#707070C4',
        selected: '#707070C4',
        hover: '#707070C4',
      },
      background: {
        default: '#F7F7F7',
      },
    },
    overrides: {
      MuiAccordionSummary: {
        root: {
          height: '48px',
          '&$expanded': {
            minHeight: '48px',
          }
        },
      },
      MuiAccordionDetails: {
        root: {
          padding: '16px 0',
        }
      },
      MuiCardContent: {
        root: {
          padding: '0 16px 16px',
          '&:last-child': {
            paddingBottom: '16px',
          }
        }
      },
      MuiList: {
        root: {
          '&$padding': {
            padding: '0',
          }
        }
      },
      MuiListItemIcon:{
        root: {
          minWidth: '60px'
        }
      },
      MuiListItem:{
        root: {
          '&$gutters': {
            paddingLeft: '12px'
          }
        }
      },
    },
    typography: {
        fontFamily: [
          'Source Sans Pro',
          'sans-serif',
        ].join(','),
        h5: {
          fontSize: '1.25rem',
        },
        fontWeightMedium: {
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: 600,
        },
        h1: {
          fontSize: '2.5rem',
          fontWeight: 600,
          color: '#707070C4',
        }
    },

  });

export default theme