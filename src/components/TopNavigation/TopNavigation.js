import React, { Component } from 'react';
import {
  AppBar,
  IconButton,
  withStyles,
  Typography,
  Toolbar
} from '@material-ui/core';
import theme from '../../styleguide/theme';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import { Link } from 'react-router-dom';
import Checkmark from '../../Icons/Checkmark/Checkmark';
import CogwheelIcon from '../../Icons/CogwheelIcon/CogwheelIcon';
import LeftArrow from '../../Icons/LeftArrow/LeftArrow';
import Toast from '../Toast/Toast';

class TopNavigation extends Component {
  submitForm = () => {
    this.props.onSubmit();
  };
  render() {
    const {
      title,
      showLeftArrow,
      showSubmit,
      showSettingsIcon,
      backOnClick,
      onSubmit
    } = this.props;
    const leftArrow = (
      <IconButton
        onClick={() => {
          backOnClick ? backOnClick() : this.props.history.goBack();
        }}
      >
        <LeftArrow />
      </IconButton>
    );
    const submitButton = (
      <IconButton onClick={this.submitForm}>
        <Toast message="Settings successfully updated">
          <Checkmark />
        </Toast>
      </IconButton>
    );
    const settingsIcon = (
      <Link to="/settings">
        <IconButton>
          <CogwheelIcon />
        </IconButton>
      </Link>
    );
    const styles = {
      root: {
        backgroundColor: 'inherit',
        boxShadow: '0 0 0 0'
      },
      title: { marginLeft: '5px' },
      icons: { marginLeft: 'auto' }
    };
    const topNavigationComponent = (
      <AppBar position="fixed" style={styles.root}>
        <Toolbar disableGutters>
          {showLeftArrow ? leftArrow : null}
          <div style={styles.title}>
            <Typography variant="title" color="primary">
              {title}
            </Typography>
          </div>
          <div style={styles.icons}>
            {showSubmit ? submitButton : null}
            {showSettingsIcon ? settingsIcon : null}
          </div>
        </Toolbar>
      </AppBar>
    );
    return title || showLeftArrow || showSettingsIcon
      ? topNavigationComponent
      : null;
  }
}

const mapStateToProps = state => {
  return {
    title: state.topNavigation.title,
    showLeftArrow: state.topNavigation.showLeftArrow,
    showSubmit: state.topNavigation.showSubmit,
    showSettingsIcon: state.topNavigation.showSettingsIcon,
    backOnClick: state.topNavigation.backOnClick,
    onSubmit: state.topNavigation.onSubmit
  };
};

export default connect(mapStateToProps, null)(TopNavigation);
