import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import InputField from "../../components/InputField/InputField";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";
import { withRouter } from "react-router";
import SisuButton from "../../components/SisuButtons/SisuButton";
import * as registerUtil from "../../util/registerPageUtil";

class Register extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.REGISTER_TOP_NAVIGATION_INITIAL);
  }
  state = {
    stepNum: 0,
    isFormValid: false,
    values: []
  };
  // ------------------------------------------------------
  goBack = () => {
    this.state.stepNum === 0 ? this.props.history.goBack() : null;
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
          title: "Register",
          backOnClick: () => this.goBack()
        })
      : null;
    this.setState(prevState => ({
      stepNum: prevState.stepNum + 1,
      values: prevState.values.concat(value)
    }));
  };
  // ------------------------------------------------------
  submitForm = event => {
    event.preventDefault();
    this.props.onAuth(this.state.values[0], this.state.values[1], true);
  };
  render() {
    const initialState = {
      form: {
        email: this.props.email,
        password: this.props.password,
        name: this.props.name,
        pillsInPack: this.props.pillsInPack,
        amountOfPacks: this.props.amountOfPacks,
        pillHour: this.props.pillHour,
        snoozeEvery: this.props.snoozeEvery
      },
      initialized: false,
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
          this.props.onInputChangedHandler(
            event,
            formElement.id,
            registerUtil.REGISTER_STEPS[this.state.stepNum].action
          )
        }
      />
    ));
    const currentTitle = registerUtil.REGISTER_STEPS[this.state.stepNum].title;
    const currentFieldValue =
      formElementsArray[this.state.stepNum].config.value;
    const isLastStep =
      this.state.stepNum === registerUtil.REGISTER_STEPS.length - 1;
    const currentFieldName = formElementsArray[this.state.stepNum].id;
    const isCurrentFieldValid =
      initialState.form[currentFieldName].validation.valid;
    return (
      <div style={{ marginTop: 80 }}>
        <div style={{ marginBottom: "30px" }}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={() => this.submitForm()}
          >
            <div
              style={{
                paddingTop: "20px",
                height: "80px"
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
          buttonType={!isCurrentFieldValid ? "greyed" : null}
          disabled={!isCurrentFieldValid ? true : false}
        >
          {isLastStep ? "Finish" : "Next"}
        </SisuButton>
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
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
