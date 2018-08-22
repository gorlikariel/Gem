import { createMuiTheme } from "@material-ui/core/styles";
export const C1 = "#314354";
export const C2 = "#8ea9c3";
export const C3 = "#adc3d9";
export const C4 = "#f6f6f6";
export const SO = "#00000066";
export const PG = "linear-gradient(to right, #7c9dfb, #a388fa)";
export const PCH = "#a388fa";
export const PCL = "#ededff";
export const PWH = "#ffffff";
export const PWL = "#fafafa";
export const G2 = "linear-gradient(to right, #66bbf7, #6696fb)";
export const G3 = "linear-gradient(to right, #77b4e4, #4ce49e)";
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
    ass: {
      main: PCL
    }
  },
  overrides: {
    MuiTypography: {
      display3: {
        fontSize: "16px",
        fontWeight: 500,
        letterSpacing: "0.0300rem"
      },
      display4: {
        fontSize: "23px",
        fontWeight: "600",
        letterSpacing: "1.6px",
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "helvetica"]
      },
      subheading: {
        fontSize: "15px",
        fontWeight: 300,
        letterSpacing: "0.2px",
        fontFamily: ["-apple-system", " BlinkMacSystemFont", "helvetica"]
      }
    },
    MuiBottomNavigationAction: {
      selected: {
        borderBottom: "4px solid #8399fb"
      }
    }
  }
});
export default theme;
