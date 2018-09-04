import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import ClipLoader from "react-spinners/ClipLoader";
import InputField from "../../components/InputField/InputField";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";
import SisuButton from "../../components/SisuButtons/SisuButton";
import { Link } from "react-router-dom";

class Login extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.LOGIN_TOP_NAVIGATION);
  }
  login = () => {
    this.props.onAuth(this.props.email.value, this.props.password.value, false);
  };
  render() {
    const errorMessage = this.props.error ? (
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Typography variant="subheading" color="error" align="center">
          {this.props.error.message}
        </Typography>
      </div>
    ) : null;

    const formFromProps = {
      form: {
        email: this.props.email,
        password: this.props.password
      }
    };
    const isFormValid =
      this.props.email.validation.valid && this.props.password.validation.valid;
    const styles = {
      text: {
        width: "100%"
      }
    };
    const formElementsArray = [];
    for (let key in formFromProps.form) {
      formElementsArray.push({
        id: key,
        config: formFromProps.form[key]
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
    const loader = (
      <div>
        <ClipLoader
          sizeUnit={"px"}
          size={25}
          color={"inherit"}
          loading={this.props.loading}
        />
      </div>
    );
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
        <SisuButton
          disabled={isFormValid ? false : true}
          onClick={this.login}
          width="100%"
          buttonType={isFormValid ? "purple" : "greyed"}
        >
          {this.props.loading ? loader : "Login"}
        </SisuButton>
        <div style={{ padding: "20px" }}>
          {errorMessage}
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
    password: state.accountSettings.form.password,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updateAccountSettings(event, inputId)),
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
