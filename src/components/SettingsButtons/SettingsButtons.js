import React from 'react';
import SettingsButton from './SettingsButton/SettingsButton';
import { Slide, Collapse } from '@material-ui/core';
import * as palette from '../../styleguide/theme';
const SettingsButtons = props => {
  return (
    <React.Fragment>
      <SettingsButton
        in={props.checked}
        icon="accountIcon"
        bgColor={palette.G3}
        color={palette.PWH}
        to="/account-settings"
      >
        Account Settings
      </SettingsButton>
      <SettingsButton
        in={props.checked}
        timeout={400}
        icon="alarmIcon"
        bgColor={palette.G2}
        color={palette.PWH}
        to="/alarm-settings"
      >
        Alarm Settings
      </SettingsButton>
      <SettingsButton
        in={props.checked}
        timeout={600}
        icon="pillIcon"
        bgColor={palette.PG}
        color={palette.PWH}
        to="/pill-settings"
      >
        Pill Settings
      </SettingsButton>
      <div style={{ marginTop: '2px' }}>
        <SettingsButton
          in={props.checked}
          timeout={800}
          onClick={props.logout}
          bgColor="linear-gradient(#fafafa, #fafafa), radial-gradient(circle at top left, #77b4e4, #a388fa)"
          color={palette.BLK}
          to="/"
        >
          Log out of {props.username}
        </SettingsButton>
      </div>
    </React.Fragment>
  );
};
export default SettingsButtons;
