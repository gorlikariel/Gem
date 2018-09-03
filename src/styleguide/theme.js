import { createMuiTheme } from "@material-ui/core/styles";
export const C1 = "#314354";
export const C2 = "#8ea9c3";
export const C3 = "#adc3d9";
export const C4 = "#e2edf9";
export const SO = "#00000066";
export const PG = "linear-gradient(to right, #7c9dfb, #a388fa)";
export const PCH = "#a388fa";
export const PCL = "#ededff";
export const PWH = "#ffffff";
export const PWL = "#fafafa";
export const G2 = "linear-gradient(to right, #66bbf7, #6696fb)";
export const G3 = "linear-gradient(to right, #77b4e4, #4ce49e)";
export const BLK = "black";
//sisu buttons,
const theme = createMuiTheme({
  palette: {
    primary: {
      main: C1
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    },
    textPrimary: {
      main: PWH,
      light: PWH
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Helvetica Neue"',
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Roboto"
    ].join(",")
  },
  overrides: {
    MuiTypography: {
      display1: {
        fontWeight: "normal",
        fontSize: "1.875rem",
        letterSpacing: "1px",
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "roboto"],
        color: C1,
        lineHeight: 1.13
      },
      display3: {
        fontSize: "16px",
        fontWeight: 500,
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "roboto"],
        letterSpacing: "0.0300rem"
      },
      display4: {
        fontSize: "23px",
        fontWeight: "600",
        letterSpacing: "1.6px",
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "roboto"],
        lineHeight: "2em"
      },
      subheading: {
        fontSize: "15px",
        fontWeight: 300,
        letterSpacing: "0.2px",
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "roboto"],
        lineHeight: "1em"
      }
    },
    MuiBottomNavigationAction: {
      wrapper: {
        flex: "flex-basis"
      },
      selected: {
        borderBottom: "4px solid #8399fb"
      }
    },
    MuiToolbar: {
      root: {
        paddingRight: "24px",
        paddingLeft: "24px"
      }
    }
  }
});
export default theme;
