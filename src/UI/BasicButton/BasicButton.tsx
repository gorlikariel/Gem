import * as React from "react";
// import Button from "./Button.css";
import * as theme from "../theme/theme";
import { Typography } from "../../../node_modules/@material-ui/core";
import RightArrow from "../Icons/RightArrow/RightArrow";
import AccountIcon from "../Icons/AccountIcon/AccountIcon";
import ClockIcon from "../Icons/ClockIcon/ClockIcon";
import PillIcon from "../Icons/PillIcon/PillIcon";

interface BasicButtonProps {
  varient: string;
  color: string;
  // logoutButton: string;
}

const BasicButton: React.SFC<BasicButtonProps> = props => {
  const textColor: string = props.varient === "logout" ? "" : theme.PWH;
  let buttonIcon = null;
  let buttonGradient: string = theme[props.color];
  let buttonColor = "";
  let rightArrow: JSX.Element | null = (
    <RightArrow style={{ paddingRight: "12px" }} />
  );

  const styles = {
    buttonIcon: {
      paddingLeft: "20px"
    },
    logoutButton: {
      width: "24px",
      paddingLeft: "20px"
    },
    button: {
      height: "64px",
      borderRadius: "6px",
      marginRight: "24px",
      marginLeft: "24px",
      marginTop: "18px",
      boxShadow: "0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f",
      backgroundImage: buttonGradient,
      display: "flex",
      alignItems: "center",
      color: textColor,
      backgroundColor: buttonColor
      //-----
    } as React.CSSProperties
  };
  switch (props.varient) {
    case "accountSettings":
      buttonIcon = <AccountIcon style={styles.buttonIcon} />;
      // buttonGradient = theme.G3;
      break;
    case "alarmSettings":
      buttonIcon = <ClockIcon style={styles.buttonIcon} />;
      // buttonGradient = theme.G2;
      console.log(buttonGradient);
      break;
    case "pillSettings":
      // buttonGradient = theme.PWH;
      buttonIcon = <PillIcon style={styles.buttonIcon} />;
      buttonColor = theme.PCH;
      break;
    case "logout":
      // buttonGradient = theme.PWH;
      buttonIcon = <div style={styles.logoutButton} />;
      rightArrow = null;
      break;

    default:
      break;
  }
  return (
    <div style={styles.button}>
      {buttonIcon}
      <Typography
        style={{ paddingLeft: "12px" }}
        variant="display3"
        color="inherit"
      >
        {props.children}
      </Typography>
      <div style={{ marginLeft: "auto" }}>{rightArrow}</div>
    </div>
  );
};

export default BasicButton;
