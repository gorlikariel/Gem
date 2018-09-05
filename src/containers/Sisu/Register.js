import React, { Component } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import InputField from '../../components/InputField/InputField';
import * as topNavConfig from '../../store/actions/topNavigationConfigs';
import { withRouter } from 'react-router';
import SisuButton from '../../components/SisuButtons/SisuButton';
import * as registerUtil from '../../util/registerPageUtil';
import { MAP_FIELDS } from '../../util/registerPageUtil';

class Register extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.REGISTER_TOP_NAVIGATION_INITIAL);
    console.log(this.props);
  }
  state = {
    stepNum: 0,
    values: []
  };
  // ------------------------------------------------------
  goBack = () => {
    this.state.stepNum === 0 ? this.props.location.replace('/sisu-main') : null;
    this.setState(prevState => ({
      stepNum: prevState.stepNum + -1
    }));
  };
  // ------------------------------------------------------
  handleNext = value => {
    this.state.stepNum === 0
      ? this.props.onInitPage({
          showLeftArrow: true,
          showSubmit: false,
          showSettingsIcon: false,
          title: 'Register',
          backOnClick: () => this.goBack()
        })
      : null;
    this.setState(prevState => {
      const newValues = [...prevState.values];
      newValues[prevState.stepNum] = value;
      console.log(newValues);
      return {
        stepNum: prevState.stepNum + 1,
        values: newValues
      };
    });
  };
  // ------------------------------------------------------
  submitForm = event => {
    event.preventDefault();
    this.setState(prevState => ({
      values: prevState.values.concat(this.props.snoozeEvery.value)
    }));
    this.props.onAuth(
      this.state.values.concat(this.props.snoozeEvery.value),
      true
    );
  };
  render() {
    const errorMessage = this.props.error ? (
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Typography variant="subheading" color="error" align="center">
          {this.props.error.message}
        </Typography>
      </div>
    ) : null;

    const formFromProps = {
      form: {
        email: this.props.email,
        password: this.props.password,
        name: this.props.name,
        pillsInPack: this.props.pillsInPack,
        amountOfPacks: this.props.amountOfPacks,
        pillHour: this.props.pillHour,
        snoozeEvery: this.props.snoozeEvery
      }
    };

    const styles = {
      text: {
        width: '100%'
      }
    };
    const formElementsArray = [];
    for (let key in formFromProps.form) {
      formElementsArray.push({
        id: key,
        config: formFromProps.form[key]
      });
    }
    let form = formElementsArray.map((formElement, index) => {
      return (
        <InputField
          autoFocus={index === this.state.stepNum}
          focused={true}
          id={formElement.id}
          key={formElement.id}
          label={formElement.config.elementConfig.label}
          type={formElement.config.elementConfig.type}
          style={styles[formElement.config.elementConfig.type]}
          value={formElement.config.value}
          margin="normal"
          onChange={event =>
            this.props.onInputChangedHandler(
              event,
              formElement.id,
              registerUtil.REGISTER_STEPS[this.state.stepNum].action
            )
          }
        />
      );
    });
    const currentTitle = registerUtil.REGISTER_STEPS[this.state.stepNum].title;
    const currentFieldValue =
      formElementsArray[this.state.stepNum].config.value;
    const isLastStep =
      this.state.stepNum === registerUtil.REGISTER_STEPS.length - 1;
    const currentFieldName = formElementsArray[this.state.stepNum].id;
    const isCurrentFieldValid =
      formFromProps.form[currentFieldName].validation.valid;
    return (
      <div style={{ marginTop: 80 }}>
        <div style={{ marginBottom: '30px' }}>
          <form
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div
              style={{
                paddingTop: '20px',
                height: '80px'
              }}
            >
              <Typography variant="display1" color="primary" align="left">
                {currentTitle}
              </Typography>
            </div>
            {form[this.state.stepNum]}
          </form>
        </div>
        <SisuButton
          onClick={
            isLastStep
              ? this.submitForm
              : () => this.handleNext(currentFieldValue)
          }
          width="100%"
          buttonType={!isCurrentFieldValid ? 'greyed' : null}
          disabled={!isCurrentFieldValid ? true : false}
        >
          {isLastStep ? 'Finish' : 'Next'}
        </SisuButton>
        {errorMessage}
      </div>
    );
  }
}
// F I X : when 'next' button goes back to disabled, the text goes black, supposed to go back to greyed
//-----------------------------------------R -- E -- D -- U -- X-------------

const mapStateToProps = state => {
  return {
    email: state.accountSettings.form.email,
    password: state.accountSettings.form.password,
    name: state.accountSettings.form.name,
    pillsInPack: state.pillSettings.form.pillsInPack,
    amountOfPacks: state.pillSettings.form.amountOfPacks,
    pillHour: state.alarmSettings.form.pillHour,
    snoozeEvery: state.alarmSettings.form.snoozeEvery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId, action) =>
      dispatch(actions[action](event, inputId)),
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    onAuth: (userData, isSignup) => dispatch(actions.auth(userData, isSignup))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
