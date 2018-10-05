import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import ClipLoader from 'react-spinners/ClipLoader';
import * as topNavConfig from '../../store/actions/topNavigationConfigs';
import SettingsButtons from '../../components/SettingsButtons/SettingsButtons';
import { Collapse } from '@material-ui/core';

class Settings extends React.Component {
  componentDidMount() {
    this.setState({ loadSettingsButtons: true });
  }
  state = { loadSettingsButtons: null };
  render() {
    const styles = {
      root: { marginTop: '118px', width: '100%' },
      loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }
    };
    const settingsButtons = (
      <SettingsButtons
        logout={this.props.logout}
        username={this.props.username}
        checked={this.state.loadSettingsButtons}
      />
    );
    const loader = (
      <div style={styles.loader}>
        <ClipLoader
          sizeUnit={'px'}
          size={50}
          color={'#757177'}
          loading={this.props.loading}
        />
      </div>
    );
    return (
      <div style={styles.root}>
        {this.props.loading ? loader : settingsButtons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.accountSettings.form.username.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    logout: () => {
      dispatch(actions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
