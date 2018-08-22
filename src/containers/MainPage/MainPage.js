import React, { Component } from "react";
import MainButton from "../../UI/MainButton/MainButton";

class MainPage extends Component {
  state = {};
  render() {
    const styles = {
      button: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }
    };
    return (
      <div style={styles.button}>
        <MainButton taken hour="23:00" />
      </div>
    );
  }
}

export default MainPage;
