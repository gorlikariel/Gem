import React from "react";
import WideButton from "../BasicButton/WideButton";
import * as theme from "../theme/theme";
import AccountIcon from "../Icons/AccountIcon/AccountIcon";
import { Typography } from "@material-ui/core";
import RightArrow from "../Icons/RightArrow/RightArrow";
import { Link } from "react-router-dom";
import ClockIcon from "../Icons/ClockIcon/ClockIcon";
import PillIcon from "../Icons/PillIcon/PillIcon";

const SettingsButtons = props => {
  let rightArrow = <RightArrow style={{ paddingRight: "12px" }} />;
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
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/account-settings">
        <WideButton bgColor="G3" color={theme.PWH}>
          <AccountIcon style={styles.buttonIcon} />
          <Typography
            style={{ paddingLeft: "12px" }}
            variant="display3"
            color="inherit"
          >
            Account Settings
          </Typography>
          <div style={{ marginLeft: "auto" }}>{rightArrow}</div>
        </WideButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/alarm-settings">
        <WideButton bgColor="G2" color={theme.PWH}>
          <ClockIcon style={styles.buttonIcon} />
          <Typography
            style={{ paddingLeft: "12px" }}
            variant="display3"
            color="inherit"
          >
            Alarm Settings
          </Typography>
          <div style={{ marginLeft: "auto" }}>{rightArrow}</div>
        </WideButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/pill-settings">
        <WideButton bgColor="PG" color={theme.PWH}>
          <PillIcon style={styles.buttonIcon} />
          <Typography
            style={{ paddingLeft: "12px" }}
            variant="display3"
            color="inherit"
          >
            Pill Settings
          </Typography>
          <div style={{ marginLeft: "auto" }}>{rightArrow}</div>
        </WideButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <WideButton bgColor="PWH" color="black">
          <Typography
            style={{ paddingLeft: "54px" }}
            variant="display3"
            color="inherit"
          >
            Log out of {props.username}
          </Typography>
        </WideButton>
      </Link>
    </div>
  );
};

export default SettingsButtons;
