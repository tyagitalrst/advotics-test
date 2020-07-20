import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#37B04C',
        contrastText: '#FFFFFF'
      },
      seconday: {
        main: '#F7F7F7',
        light: '#727272',
        contrastText: '#707070C4',
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
        active: '#D2D2D2',
        selected: '#D2D2D2',
        hover: '#D2D2D2',
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
    },
    typography: {
        fontFamily: [
          'Open Sans', 
          'sans-serif',
          'Source Sans Pro',
        ].join(','),
    },

  });

export default theme