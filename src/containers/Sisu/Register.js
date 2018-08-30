import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import InputField from "../../components/InputField/InputField";
import SisuButton from "../../UI/SisuButtons/SisuButton";
import * as topNavConfig from "../../store/actions/topNavigationConfigs";
import { withRouter } from "react-router";

class Register extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.REGISTER_TOP_NAVIGATION_INITIAL);
  }
  state = {
    stepNum: 0,
    steps: [
      "What's your email?",
      "What's your name?",
      "How many pills do you have in a pack?",
      "How many packs do you have?",
      "What time do you wish to be alarmed?",
      "How often should the alarm go off?"
    ],
    isValid: false
  };
  goBack = () => {
    this.state.stepNum === 0 ? this.props.history.goBack() : null;
    this.setState(prevState => ({
      stepNum: prevState.stepNum + -1
    }));
  };
  handleNext = () => {
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
      stepNum: prevState.stepNum + 1
    }));
  };
  render() {
    const initialState = {
      form: {
        email: this.props.email,
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
          this.props.onInputChangedHandler(event, formElement.id)
        }
      />
    ));
    const currentTitle = this.state.steps[this.state.stepNum];
    const isValid = this.state.isValid ? "" : "greyed";
    const isLastStep = this.state.stepNum === this.state.steps.length - 1;
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
                {currentTitle}
              </Typography>
            </div>
            {form[this.state.stepNum]}
          </form>
        </div>
        <SisuButton onClick={this.handleNext} width="100%" variant={isValid}>
          {isLastStep ? "Finish" : "Next"}
        </SisuButton>
      </div>
    );
  }
}

//-----------------------------------------R -- E -- D -- U -- X-------------

const mapStateToProps = state => {
  return {
    email: state.accountSettings.form.email,
    name: state.accountSettings.form.name,
    pillsInPack: state.pillSettings.form.pillsInPack,
    amountOfPacks: state.pillSettings.form.amountOfPacks,
    pillHour: state.alarmSettings.form.pillHour,
    snoozeEvery: state.alarmSettings.form.snoozeEvery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updatePillSettings(event, inputId)),
    onInitPage: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
