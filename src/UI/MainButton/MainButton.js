import React from "react";
import { ButtonBase, Typography } from "@material-ui/core";
import * as theme from "../theme/theme";
// const styles = {
//   root: {
//     width: "100%",
//     bottom: 0,
//     position: "fixed",
//     backgroundColor: "inherit"
//   },
//   button: {
//     display: "flex",
//     flexDirection: "column",
//     alignText: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     width: " 264px",
//     height: "264px",
//     borderRadius: "50%",
//     backgroundImage:
//       "linear-gradient(to right, #7c9dfb, #8599fb 20%, #8d95fb 40%, #9591fa 60%, #9c8cfa 80%, #a388fa)"
//   }
// };

const MainButton = props => {
  const styles = {
    button: {
      color: theme.PWH,
      display: "flex",
      flexDirection: "column",
      alignText: "center",
      alignItems: "center",
      justifyContent: "center",
      width: " 264px",
      height: "264px",
      borderRadius: "50%",

      boxShadow: "0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f"
    },
    poop: {
      notTaken: {
        backgroundImage:
          "linear-gradient(to right, #7c9dfb, #8599fb 20%, #8d95fb 40%, #9591fa 60%, #9c8cfa 80%, #a388fa)"
      },
      taken: {
        boxShadow: " inset 0 -4px 10px 0 #0000001d",
        border: "solid 4px transparent",
        backgroundImage:
          "linear-gradient(to top, #f2f8fd, #e2edf9), linear-gradient(to top, #f6f6f6, #e3eef9)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        color: "#616467"
      }
    }
  };
  const taken = props.taken;
  return (
    <div
      id="child"
      style={Object.assign(
        {},
        styles.button,
        styles.poop[taken ? "taken" : "notTaken"]
      )}
    >
      <Typography color="inherit" variant="display4">
        {taken ? "PILL TAKEN" : "TAKE PILL"}
      </Typography>
      <Typography color="inherit" variant="subheading" align="center">
        {`${taken ? "next pill" : ""} scheduled for `} <br />
        {`${taken ? "tommorow at" : ""} ${props.hour}`}
      </Typography>
      <Typography color="inherit" variant="display4">
        ⚡4
      </Typography>
    </div>
  );
};

export default MainButton;
