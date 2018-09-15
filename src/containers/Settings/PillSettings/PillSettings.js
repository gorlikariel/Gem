import React, { Component } from 'react';
import { TextField, Button, Collapse } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actionsIndex';
import InputField from '../../../components/InputField/InputField';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';
import WideButton from '../../../components/WideButton/WideButton';
import Axios from 'axios';

class PillSettings extends Component {
  componentDidMount() {
    this.props.initNavbarConfig(
      topNavConfig.PILL_SETTINGS_TOP_NAVIGATION(
        this.props.tryUpdatingPillSettings
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
    form: state.pillSettings.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updatePillSettings(event, inputId)),
    initNavbarConfig: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    tryUpdatingPillSettings: () => dispatch(actions.tryUpdatingPillSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PillSettings);
