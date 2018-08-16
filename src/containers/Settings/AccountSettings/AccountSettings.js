import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";

class AccountSettings extends Component {
  render() {
    const styles = {
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
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
      <TextField
        id={formElement.id}
        key={formElement.id}
        label={formElement.config.elementConfig.label}
        style={styles.textField}
        value={""}
        //   onChange={this.handleChange("name")}
        margin="normal"
      />
    ));
    console.log(formElementsArray[1].config);
    return (
      <form style={styles.container} noValidate autoComplete="off">
        {form}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.accountSettings.form
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
