import React, { Component } from 'react';
import { TextField, Collapse } from '@material-ui/core';
import { connect } from 'react-redux';
import InputField from '../../../components/InputField/InputField';
import * as actions from '../../../store/actions/actionsIndex';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';

class AlarmSettings extends Component {
  componentDidMount() {
    this.props.initNavbarConfig(
      topNavConfig.ALARM_SETTINGS_TOP_NAVIGATION(
        this.props.tryUpdatingAlarmSettings
      )
    );
    this.setState({ collapseFields: true });
  }
  state = { collapseFields: false };
  render() {
    const styles = {
      root: { marginTop: 80 }
    };
    const formElementsArray = [];
    for (let key in this.props.form) {
      formElementsArray.push({
        id: key,
        config: this.props.form[key]
      });
    }
    let form = formElementsArray.map((formElement, index) => (
      <Collapse
        key={formElement.id}
        in={this.state.collapseFields}
        timeout={400 + index * 200}
      >
        <InputField
          id={formElement.id}
          key={formElement.id}
          label={formElement.config.elementConfig.label}
          type={formElement.config.elementConfig.type}
          style={styles[formElement.config.elementConfig.type]}
          value={formElement.config.value}
          margin="normal"
          onChange={event =>
            this.props.onInputChangedHandler(event, formElement.id)
          }
        />
      </Collapse>
    ));
    return (
      <div style={styles.root}>
        <form noValidate autoComplete="off">
          {form}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.alarmSettings.form,
    isFormFilled: state.alarmSettings.isFormFilled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updateAlarmSettings(event, inputId)),
    initNavbarConfig: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    tryUpdatingAlarmSettings: () => dispatch(actions.tryUpdatingAlarmSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlarmSettings);
