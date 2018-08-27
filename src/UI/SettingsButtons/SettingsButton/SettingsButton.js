import React from "react";
import { Link } from "react-router-dom";
import WideButton from "../../WideButton/WideButton";
import { Typography } from "@material-ui/core";
import AccountIcon from "../../Icons/AccountIcon/AccountIcon";
import ClockIcon from "../../Icons/ClockIcon/ClockIcon";
import PillIcon from "../../Icons/PillIcon/PillIcon";
import * as theme from "../../theme/theme";
import RightArrow from "../../Icons/RightArrow/RightArrow";
const SettingsButton = props => {
  const clicked = () => {
    console.log("FUUUCK");
  };
  const rightArrow = <RightArrow style={{ paddingRight: "12px" }} />;
  const styles = {
    buttonIcon: {
      paddingLeft: "20px"
    },
    logoutButton: {
      width: "24px",
      paddingLeft: "20px"
    },
    navLink: {
      textDecoration: "none",
      color: "inherit"
    }
  };
  const icons = {
    accountIcon: <AccountIcon style={styles.buttonIcon} />,
    alarmIcon: <ClockIcon style={styles.buttonIcon} />,
    pillIcon: <PillIcon style={styles.buttonIcon} />
  };

  return (
    <Link style={{ textDecoration: "none" }} to={props.to}>
      <WideButton bgColor={props.bgColor} color={theme[props.color]}>
        {icons[props.icon]}
        <Typography
          style={{ paddingLeft: props.to === "/" ? "54px" : "12px" }}
          variant="display3"
          color="inherit"
        >
          {props.children}
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          {props.to === "/" ? null : rightArrow}
        </div>
      </WideButton>
    </Link>
  );
};
export default SettingsButton;
