import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    // MuiPaper: {
    //   root: {
    //     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    //     borderRadius: 6,
    //     border: 0,
    //     color: "white",
    //     height: 48,
    //     padding: "0 30px",
    //     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    //   }
    // }
  },
  // typography: {
  //   // Use the system font instead of the default Roboto font.
  //   fontFamily: [
  //     //   "system-ui",
  //     "-apple-system",
  //     "BlinkMacSystemFont",
  //     //   '"Segoe UI"'
  //     //   "Roboto",
  //     '"Helvetica"'
  //     //   "Arial",
  //     //   "sans-serif",
  //     //   '"Apple Color Emoji"',
  //     //   '"Segoe UI Emoji"',
  //     //   '"Segoe UI Symbol"'
  //   ].join(",")
  // },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

export default theme;
