import BasicButton from "../../UI/BasicButton/BasicButton";
import * as React from "react";

class Settings extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <BasicButton
          color="G3"
          varient="accountSettings"
          link="/account-settings"
        >
          Account Settings
        </BasicButton>
        <BasicButton color="G2" varient="alarmSettings" link="/alarm-settings">
          Alarm Settings
        </BasicButton>
        <BasicButton color="PG" varient="pillSettings" link="">
          Pill Settings
        </BasicButton>
        <BasicButton color="C1" varient="logout" link="">
          Log Out of danag777
        </BasicButton>
      </div>
    );
  }
}

export default Settings;
