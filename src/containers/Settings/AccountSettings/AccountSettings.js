import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import InputField from "../../../components/InputField/InputField";

class AccountSettings extends Component {
  componentDidMount() {
    this.setState({ screenWidth: window.innerWidth + "px" });
  }
  state = { screenWidth: null };

  render() {
    const styles = {
      container: {
        // display: "flex",
        // flexWrap: "wrap"
      },
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
        // value={formElement.config.value}
        value="SHIT!"
        //   onChange={this.handleChange("name")}
        margin="normal"
      />
    ));
    console.log(formElementsArray[1].config);
    return (
      <React.Fragment>
        <form style={styles.container} noValidate autoComplete="off">
          {form}
        </form>
        {/*this.state.screenWidth ? <hr width={this.state.screenWidth} /> : null*/}
      </React.Fragment>
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
