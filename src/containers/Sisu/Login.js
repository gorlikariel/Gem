import React, { Component } from 'react';
import { TextField, Typography, Slide } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import ClipLoader from 'react-spinners/ClipLoader';
import InputField from '../../components/InputField/InputField';
import * as topNavConfig from '../../store/actions/topNavigationConfigs';
import SisuButton from '../../components/SisuButtons/SisuButton';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    marginTop: 80
  },
  layer: {
    marginBottom: '30px'
  },
  error: {
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  welcomeHeadline: {
    paddingTop: '20px',
    height: '80px'
  },
  registerRedirect: {
    textDecoration: 'none',
    color: '#7d9cfb'
  }
};

class Login extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.LOGIN_TOP_NAVIGATION);
    this.setState({ slideInFields: true });
  }
  componentWillUnmount() {
    this.props.clearAuthError();
  }
  state = { slideInFields: false };
  login = () => {
    this.props.onAuth(
      [this.props.email.value, this.props.password.value],
      false
    );
  };
  render() {
    const {
      error: firebaseError,
      email,
      password,
      loading,
      onInputChangedHandler
    } = this.props;
    const { root, error, welcomeHeadline, registerRedirect, layer } = styles;
    error ? console.log('Firebase Error : ' + firebaseError) : null;
    const errorMessage = firebaseError ? (
      <div style={error}>
        <Typography variant="subheading" color="error" align="center">
          {firebaseError}
        </Typography>
      </div>
    ) : null;

    const formFromProps = {
      form: {
        email: email,
        password: password
      }
    };
    const isFormValid = email.validation.valid && password.validation.valid;
    const formElementsArray = [];
    for (let key in formFromProps.form) {
      formElementsArray.push({
        id: key,
        config: formFromProps.form[key]
      });
    }
    let form = formElementsArray.map((formElement, index) => (
      <Slide
        key={formElement.id}
        in={this.state.slideInFields}
        timeout={400 + index * 200}
        direction="right"
      >
        <InputField
          id={formElement.id}
          key={formElement.id}
          label={formElement.config.elementConfig.label}
          type={formElement.config.elementConfig.type}
          style={styles[formElement.config.elementConfig.type]}
          value={formElement.config.value}
          margin="normal"
          onChange={event => onInputChangedHandler(event, formElement.id)}
        />
      </Slide>
    ));
    const loader = (
      <div>
        <ClipLoader
          sizeUnit={'px'}
          size={25}
          color={'inherit'}
          loading={loading}
        />
      </div>
    );
    return (
      <div style={root}>
        <div style={layer}>
          <form noValidate autoComplete="off">
            <div style={welcomeHeadline}>
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
          buttonType={isFormValid ? 'purple' : 'greyed'}
        >
          {loading ? loader : 'Login'}
        </SisuButton>
        <div style={error}>
          {errorMessage}
          <Typography variant="subheading" color="primary" align="center">
            New user?
            <Link style={registerRedirect} to="/register">
              {' '}
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
      dispatch(actions.auth(email, password, isSignup)),
    clearAuthError: () => dispatch(actions.clearAuthError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
