import { createMuiTheme } from '@material-ui/core/styles';
export const C1 = '#314354';
export const C2 = '#8ea9c3';
export const C3 = '#adc3d9';
export const C4 = '#e2edf9';
export const SO = '#00000066';
export const PG = 'linear-gradient(to right, #7c9dfb, #a388fa)';
export const PCH = '#a388fa';
export const PCL = '#ededff';
export const PWH = '#ffffff';
export const PWL = '#fafafa';
export const G2 = 'linear-gradient(to right, #66bbf7, #6696fb)';
export const G3 = 'linear-gradient(to right, #77b4e4, #4ce49e)';
export const BLK = 'black';
export const boxShadows = {
  wideButton: '0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f',
  pillButtonNotTaken:
    '0 10px 10px 0 #0000000c, 0 15px 15px 0 #00000019, 0 8px 8px 0 #0000000d, 0 0 10px 5px #0000000c',
  pillButtonTaken: ' inset 0 -4px 10px 0 #0000001d'
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: C1
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    },
    textPrimary: {
      main: PWH,
      light: PWH
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Roboto'
    ].join(',')
  },
  overrides: {
    MuiTypography: {
      root: {
        userSelect: 'none'
      },
      display1: {
        fontWeight: 'normal',
        fontSize: '1.875rem',
        letterSpacing: '1px',
        fontFamily: ['-apple-system', ' BlinkMacSystemFont', 'roboto'],
        color: C1,
        lineHeight: 1.13
      },
      display3: {
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: ['-apple-system', ' BlinkMacSystemFont', 'roboto'],
        letterSpacing: '0.0300rem'
      },
      display4: {
        fontSize: '23px',
        fontWeight: '600',
        letterSpacing: '1.6px',
        fontFamily: ['-apple-system', ' BlinkMacSystemFont', 'roboto'],
        lineHeight: '2em'
      },
      subheading: {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '0.2px',
        fontFamily: ['-apple-system', ' BlinkMacSystemFont', 'roboto'],
        lineHeight: '1.5em'
      }
    },
    MuiBottomNavigationAction: {
      wrapper: {
        flex: 'flex-basis'
      },
      selected: {
        borderBottom: '4px solid #8399fb'
      }
    },
    MuiToolbar: {
      root: {
        paddingRight: '24px',
        paddingLeft: '24px',
        overflow: 'hidden',
        backgroundColor: PWL,
        height: '90px'
      }
    },
    MuiMobileStepper: {
      dot: {
        margin: '10px',
        width: '9px',
        height: '9px',
        backgroundColor: PCL
      },
      dotActive: {
        backgroundColor: C3
      }
    },
    MuiButton: {
      text: {
        userSelect: 'none'
      }
    },
    MuiIconButton: {
      root: {
        userSelect: 'none'
      }
    },
    MuiButtonBase: {
      root: { userSelect: 'none' }
    },
    MuiTouchRipple: { root: { userSelect: 'none' } }
  }
});
export default theme;
