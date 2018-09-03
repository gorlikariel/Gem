import React from "react";
import { Link } from "react-router-dom";
import WideButton from "../../WideButton/WideButton";
import { Typography } from "@material-ui/core";
import * as theme from "../../../styleguide/theme";
import AccountIcon from "../../../Icons/AccountIcon/AccountIcon";
import RightArrow from "../../../Icons/RightArrow/RightArrow";
import PillIcon from "../../../Icons/PillIcon/PillIcon";
import ClockIcon from "../../../Icons/ClockIcon/ClockIcon";
const SettingsButton = props => {
  const { bgColor, color, to, children, icon } = props;
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
    }
  };
  const icons = {
    accountIcon: <AccountIcon style={styles.buttonIcon} />,
    alarmIcon: <ClockIcon style={styles.buttonIcon} />,
    pillIcon: <PillIcon style={styles.buttonIcon} />
  };

  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <WideButton
        onClick={props.onClick}
        bgColor={theme[bgColor]}
        color={theme[color]}
      >
        {icons[icon]}
        <Typography
          style={{ paddingLeft: to === "/" ? "54px" : "12px" }}
          variant="display3"
          color="inherit"
        >
          {children}
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          {to === "/" ? null : rightArrow}
        </div>
      </WideButton>
    </Link>
  );
};
export default SettingsButton;
