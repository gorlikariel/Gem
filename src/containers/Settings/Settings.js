import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import ClipLoader from "react-spinners/ClipLoader";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";
import SettingsButtons from "../../components/SettingsButtons/SettingsButtons";

class Settings extends React.Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.SETTINGS_TOP_NAVIGATION);
  }
  render() {
    const settingsButtons = <SettingsButtons username={this.props.username} />;
    const loader = (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        }}
      >
        <ClipLoader
          sizeUnit={"px"}
          size={50}
          color={"#757177"}
          loading={this.props.loading}
        />
      </div>
    );
    console.log(this.props);
    return (
      <div id="this" style={{ marginTop: "118px", width: "100%" }}>
        {this.props.loading ? loader : settingsButtons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.accountSettings.form.userName.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
