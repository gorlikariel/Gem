import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import InputField from "../../../components/InputField/InputField";
import * as actions from "../../../store/actions/actionsIndex";
import CircleLoader from "react-spinners/CircleLoader";
import * as topNavConfig from "../../../store/actions/topNavigationConfigs";
class AccountSettings extends Component {
  componentDidMount() {
    this.props.initNavbarConfig(
      this.props.isFormValid
        ? topNavConfig.ACCOUNT_SETTINGS_TOP_NAVIGATION_READY
        : topNavConfig.ACCOUNT_SETTINGS_TOP_NAVIGATION
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isFormValid !== this.props.isFormValid) {
      this.props.initNavbarConfig(
        this.props.isFormValid
          ? topNavConfig.ACCOUNT_SETTINGS_TOP_NAVIGATION_READY
          : topNavConfig.ACCOUNT_SETTINGS_TOP_NAVIGATION
      );
    }
  }

  state = { screenWidth: null, isFormValid: false };

  render() {
    const styles = {
      text: {
        width: "100%"
      }
    };
    const formElementsArray = [];
    for (let key in this.props.form) {
      formElementsArray.push({
        id: key,
        config: this.props.form[key]
      });
    }
    let form = this.props.loading ? null : (
      <form noValidate autoComplete="off">
        {formElementsArray.map(formElement => (
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
        ))}
      </form>
    );

    return (
      <div style={{ marginTop: 80 }}>
        {this.props.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px"
            }}
          >
            <CircleLoader
              sizeUnit={"px"}
              size={50}
              color={"#757177"}
              loading={this.props.loading}
            />
          </div>
        ) : (
          form
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.accountSettings.form,
    loading: state.accountSettings.loading,
    isFormValid: state.accountSettings.isFormValid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updateAccountSettings(event, inputId)),
    initNavbarConfig: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
