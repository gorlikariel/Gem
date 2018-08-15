import BasicButton from "../../UI/BasicButton/BasicButton";
import * as React from "react";

// interface SettingsProps={

// }

class Settings extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <BasicButton color="G3" varient="accountSettings">
          Account Settings
        </BasicButton>
        <BasicButton color="G2" varient="alarmSettings">
          Alarm Settings
        </BasicButton>
        <BasicButton color="PG" varient="pillSettings">
          Pill Settings
        </BasicButton>
        <BasicButton color="C1" varient="logout">
          Log Out of danag777
        </BasicButton>
      </div>
    );
  }
}

export default Settings;
