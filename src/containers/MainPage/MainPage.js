import React, { Component } from "react";
import MainButton from "../../UI/MainButton/MainButton";
import BounceLoader from "react-spinners/BounceLoader";
import * as actions from "../../store/actions/actionsIndex";
import { connect } from "react-redux";
import firebase from "../../firebase";
import * as theme from "../../UI/theme/theme";
class MainPage extends Component {
  componentDidMount() {
    const topNavbarConfig = {
      showLeftArrow: false,
      showSubmit: false,
      showSettingsIcon: true,
      title: ""
    };
    this.props.onInitPage(topNavbarConfig);
    this.props.initialized ? null : this.props.loadSettings();
  }
  render() {
    const { loading, taken, pillHour, onTakePill, onUndoPill } = this.props;
    const mainButton = loading ? (
      <BounceLoader
        sizeUnit={"px"}
        size={264}
        color={theme.C3}
        loading={loading}
      />
    ) : (
      <MainButton hour={pillHour} />
    );
    const styles = {
      button: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }
    };
    return (
      <div style={styles.button} onClick={taken ? onUndoPill : onTakePill}>
        {mainButton}
      </div>
    );
  }
}

//------------------------------------------------------------------------------------

const mapStateToProps = state => {
  return {
    loading: state.pill.loading,
    pillHour: state.alarmSettings.form.pillHour.value,
    taken: state.pill.taken,
    initialized:
      state.accountSettings.initialized &&
      state.alarmSettings.initialized &&
      state.pillSettings.initialized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTakePill: () => dispatch(actions.tryTakingPill()),
    onUndoPill: () => dispatch(actions.tryUndoPill()),
    onInitPage: navBarConfig => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    },
    loadSettings: () => {
      dispatch(actions.initPillButton());
      dispatch(actions.initAccountSettings());
      dispatch(actions.initAlarmSettings());
      dispatch(actions.initPillSettings());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
