import * as React from "react";
import * as theme from "../theme/theme";

const WideButton = props => {
  const styles = {
    button: {
      width: "100%",
      height: "64px",
      borderRadius: "6px",
      marginTop: "18px",
      boxShadow: "0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f",
      backgroundImage: theme[props.bgColor],
      display: "flex",
      alignItems: "center",
      color: props.color,
      backgroundColor: props.backgroundColor
      //-----
    }
    // navLink: {
    //   textDecoration: "none",
    //   color: "inherit"
    // }
  };
  //Render the right button
  return (
    <div onClick={props.onClick} style={styles.button}>
      {props.children}
    </div>
  );
};
//make WideButton way more reusable
export default WideButton;
