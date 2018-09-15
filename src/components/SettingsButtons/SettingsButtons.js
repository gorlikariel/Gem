import React from 'react';
import SettingsButton from './SettingsButton/SettingsButton';
import { Collapse } from '@material-ui/core';
const SettingsButtons = props => (
  <React.Fragment>
    <Collapse in={props.checked}>
      <SettingsButton
        icon="accountIcon"
        bgColor="G3"
        color="PWH"
        to="/account-settings"
      >
        Account Settings
      </SettingsButton>
    </Collapse>
    <Collapse in={props.checked} timeout={400}>
      <SettingsButton
        icon="alarmIcon"
        bgColor="G2"
        color="PWH"
        to="/alarm-settings"
      >
        Alarm Settings
      </SettingsButton>
    </Collapse>
    <Collapse in={props.checked} timeout={600}>
      <SettingsButton
        icon="pillIcon"
        bgColor="PG"
        color="PWH"
        to="/pill-settings"
      >
        Pill Settings
      </SettingsButton>
    </Collapse>
    <Collapse in={props.checked} timeout={800}>
      <SettingsButton onClick={props.logout} bgColor="PWH" color="BLK" to="/">
        Log out of {props.username}
      </SettingsButton>
    </Collapse>
  </React.Fragment>
);

export default SettingsButtons;
