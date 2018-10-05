import * as React from 'react';
import SettingsButton from './SettingsButton/SettingsButton';
import * as palette from '../../styleguide/theme';

interface SettingsButtonsProps {
  checked: boolean;
  logout: any;
  username: string;
}

const SettingsButtons: React.SFC<SettingsButtonsProps> = props => {
  const { checked, logout, username } = props;
  return (
    <>
      <SettingsButton
        in={checked}
        icon="accountIcon"
        bgImg={palette.G3}
        color={palette.PWH}
        to="/account-settings"
      >
        Account Settings
      </SettingsButton>
      <SettingsButton
        in={checked}
        timeout={400}
        icon="alarmIcon"
        bgImg={palette.G2}
        color={palette.PWH}
        to="/alarm-settings"
      >
        Alarm Settings
      </SettingsButton>
      <SettingsButton
        in={checked}
        timeout={600}
        icon="pillIcon"
        bgImg={palette.PG}
        color={palette.PWH}
        to="/pill-settings"
      >
        Pill Settings
      </SettingsButton>
      <SettingsButton
        in={checked}
        timeout={800}
        onClick={logout}
        bgImg={palette.PWH}
        color={palette.BLK}
        to="/"
      >
        Log out of {username}
      </SettingsButton>
    </>
  );
};
export default SettingsButtons;
