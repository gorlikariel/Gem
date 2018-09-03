import React from "react";
import SettingsButton from "./SettingsButton/SettingsButton";
const SettingsButtons = props => (
  <React.Fragment>
    <SettingsButton
      icon="accountIcon"
      bgColor="G3"
      color="PWH"
      to="/account-settings"
    >
      Account Settings
    </SettingsButton>
    <SettingsButton
      icon="alarmIcon"
      bgColor="G2"
      color="PWH"
      to="/alarm-settings"
    >
      Alarm Settings
    </SettingsButton>
    <SettingsButton
      icon="pillIcon"
      bgColor="PG"
      color="PWH"
      to="/pill-settings"
    >
      Pill Settings
    </SettingsButton>
    <SettingsButton
      onClick={() => console.log("FUCK")}
      bgColor="PWH"
      color="BLK"
      to="/"
    >
      Log out of {props.username}
    </SettingsButton>
  </React.Fragment>
);

export default SettingsButtons;
