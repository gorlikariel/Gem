import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import InputField from "../../components/InputField/InputField";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";
import SisuButton from "../../components/SisuButtons/SisuButton";
// import * as theme from "../../styleguide/theme";
import { Link } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.LOGIN_TOP_NAVIGATION);
  }
  state = {
    isValid: false
  };
  render() {
    const initialState = {
      form: {
        email: this.props.email,
        password: this.props.password
      },
      isFormValid: false,
      loading: false,
      submitted: false,
      error: false
    };

    const styles = {
      text: {
        width: "100%"
      }
    };
    const formElementsArray = [];
    for (let key in initialState.form) {
      formElementsArray.push({
        id: key,
        config: initialState.form[key]
      });
    }
    let form = formElementsArray.map(formElement => (
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
    ));
    const isValid = this.state.isValid ? "" : "greyed";
    return (
      <div style={{ marginTop: 80 }}>
        <div style={{ marginBottom: "30px" }}>
          <form noValidate autoComplete="off">
            <div
              style={{
                paddingTop: "20px",
                height: "80px"
              }}
            >
              <Typography variant="display1" color="primary" align="left">
                Welcome back!
              </Typography>
            </div>
            {form}
          </form>
        </div>
        <SisuButton onClick={this.handleNext} width="100%" variant={isValid}>
          Login
        </SisuButton>
        <div style={{ padding: "20px" }}>
          <Typography variant="subheading" color="primary" align="center">
            New user?
            <Link
              style={{ textDecoration: "none", color: "#7d9cfb" }}
              to="/register"
            >
              {" "}
              Signup
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

//-----------------------------------------R -- E -- D -- U -- X-------------

const mapStateToProps = state => {
  return {
    email: state.accountSettings.form.email,
    password: state.accountSettings.form.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updatePillSettings(event, inputId)),
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    onAuth: () => dispatch(actions.auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
