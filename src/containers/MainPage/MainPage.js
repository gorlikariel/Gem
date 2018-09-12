import React, { Component } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import * as actions from '../../store/actions/actionsIndex';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import * as topNavConfig from '../../store/actions/topNavigationConfigs';
import theme from '../../styleguide/theme';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog';
import MainButton from '../../components/MainButton/MainButton';
import { ButtonBase } from '@material-ui/core';
import axios from 'axios';
// DO THIS : add transition to button after being clicked
class MainPage extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.MAIN_PAGE_TOP_NAVIGATION);
    const id = localStorage.getItem('userId');
    axios
      .get(`https://bluemarble-a4f07.firebaseio.com/users/${id}.json`)
      .then(res => {
        this.props.initialized ? null : this.props.loadSettings(res.data);
      })
      .catch(e => console.log(e));
  }
  state = {
    open: false
  };
  openDialog = () => {
    this.state.open ? null : this.setState({ open: true });
  };
  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      loading,
      initialized,
      taken,
      pillHour,
      onTakePill,
      onUndoPill
    } = this.props;
    const mainButton = initialized ? (
      <BounceLoader
        sizeUnit={'px'}
        size={264}
        color={theme.C3}
        loading={initialized}
      />
    ) : (
      <MainButton
        onClick={taken && !loading ? this.openDialog : onTakePill}
        hour={pillHour}
      />
    );
    const styles = {
      button: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }
    };

    return (
      <div
        style={styles.button}
        onClick={taken && !loading ? this.openDialog : onTakePill}
      >
        {mainButton}
        <ConfirmationDialog
          open={this.state.open}
          onAgree={() => {
            this.onClose();
            onUndoPill();
          }}
          onClose={this.onClose}
          message="Are you sure you want to undo?"
        />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------R -- E -- D -- U -- X -- -- T -- I -- M -- E

const mapStateToProps = state => {
  return {
    loading: state.pill.loading || state.pillSettings.loading,
    pillHour: state.alarmSettings.form.pillhour.value,
    taken: state.pill.taken,
    initialized:
      state.accountSettings.initialized &&
      state.alarmSettings.initialized &&
      state.pillSettings.initialized &&
      state.pill.initalized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTakePill: () => dispatch(actions.tryTakingPill()),
    onUndoPill: () => dispatch(actions.tryUndoPill()),
    onInitPage: navBarConfig => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    },
    loadSettings: userData => {
      dispatch(actions.initPillButton(userData.dailyPill.taken));
      dispatch(actions.initAccountSettings(userData.settings.account));
      dispatch(actions.initAlarmSettings(userData.settings.alarm));
      dispatch(actions.initPillSettings(userData.settings.pill));
    },
    logout: () => {
      dispatch(actions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
