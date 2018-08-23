import React, { Component } from "react";
import MainButton from "../../UI/MainButton/MainButton";
import BounceLoader from "react-spinners/BounceLoader";
import * as actions from "../../store/actions/actionsIndex";
import { connect } from "react-redux";
import firebase from "../../firebase";
class MainPage extends Component {
  componentDidMount() {
    this.props.onInitPage();
  }
  render() {
    const mainButton = this.props.loading ? (
      <BounceLoader
        // className={override}
        sizeUnit={"px"}
        size={264}
        color={"#757177"}
        loading={this.props.loading}
      />
    ) : (
      <MainButton />
    );
    const styles = {
      button: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }
    };
    return (
      <div style={styles.button} onClick={this.props.onTakePill}>
        {mainButton}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.pill.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTakePill: () => dispatch(actions.tryTakingPill()),
    onInitPage: () => dispatch(actions.initPillButton())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
