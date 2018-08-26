import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import InputField from "../../../components/InputField/InputField";
// import { Prompt } from "react-router";
// USE PROMPT, ITS TOO COOL TO IGNORE
import * as actions from "../../../store/actions/actionsIndex";
class AlarmSettings extends Component {
  componentDidMount() {
    this.setState({ screenWidth: window.innerWidth + "px" });
  }
  state = { screenWidth: null };

  render() {
    // console.log(this.props.match.params);
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
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          {form}
        </form>
        {/*this.state.screenWidth ? <hr width={this.state.screenWidth} /> : null*/}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.alarmSettings.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updateAlarmSettings(event, inputId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlarmSettings);
