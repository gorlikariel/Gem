import * as React from "react";
import SettingsButtons from "../../UI/SettingsButtons/SettingsButtons";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import ClipLoader from "react-spinners/ClipLoader";

class Settings extends React.Component {
  componentDidMount() {
    this.props.initialized ? null : this.props.onInitAccountSettings();
  }

  render() {
    const settingsButtons = <SettingsButtons username={this.props.username} />;
    const loader = (
      <ClipLoader
        sizeUnit={"px"}
        size={50}
        color={"#757177"}
        loading={this.props.loading}
      />
    );
    const location = { pathname: "/alarm-settings", state: { testing: true } };
    console.log(this.props);
    return (
      <div id="this" style={{ marginTop: 10 }}>
        {this.props.loading ? loader : settingsButtons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.accountSettings.form.userName.value,
    loading: state.accountSettings.loading,
    initialized: state.accountSettings.initialized
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitAccountSettings: () => dispatch(actions.initAccountSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
