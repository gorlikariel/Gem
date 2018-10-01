import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, MobileStepper, Button, Paper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import LeftArrow from '../../Icons/LeftArrow/LeftArrow';
import RightArrow from '../../Icons/RightArrow/RightArrow';
import first from './Onboarding1.png';
import second from './Onboarding2.png';
import third from './Onboarding3.png';
import * as palette from '../../styleguide/theme';
import { getAndStoreNotificationToken } from '../../firebase';

const tutorialSteps = [
  {
    label: 'Never Miss a Pill',
    paragraph: `Pre-Alarm and an Auto-Snooze\n
features to make sure you don't forget\n
to take your pills`,
    imgPath: first
  },
  {
    label: 'Track Your Cycle',
    paragraph: `Track the remaining quantity and\n
keep up with monthly statistics`,

    imgPath: second
  },
  {
    label: 'Knowledge Base',
    paragraph: `Have a question? not sure about\n
something? find your answer on the\n
FAQ section.`,
    imgPath: third
  }
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: '100%',
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden'
  },
  mobileStepper: {
    backgroundColor: 'white'
  },
  dots: {
    color: 'red',
    backgroundColor: 'blue'
  },
  tutorialStep: {
    color: '#8ea9c3',
    whiteSpace: 'pre',
    backgroundColor: palette.PWL
  }
});

class Introduction extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const finishOnboarding = () => {
      getAndStoreNotificationToken();
      this.props.history.replace('/');
    };

    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <div key={step.paragraph}>
              <img
                key={step.label}
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          ))}
        </SwipeableViews>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          resistance={true}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <div key={step.imgPath} style={styles.tutorialStep}>
              <Typography
                key={step.label}
                align="center"
                color="primary"
                variant="display4"
              >
                {step.label}
              </Typography>
              <Typography
                paragraph
                key={step.paragraph}
                align="center"
                color="inherit"
                variant="subheading"
              >
                {step.paragraph}
              </Typography>
            </div>
          ))}
        </SwipeableViews>

        <MobileStepper
          steps={maxSteps}
          position="bottom"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={
                activeStep === maxSteps ? finishOnboarding() : this.handleNext
              }
              disabled={activeStep === maxSteps}
            >
              <Typography color="primary" variant="display3">
                {activeStep === maxSteps - 1 ? 'FINISH' : 'NEXT'}
              </Typography>
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? <RightArrow /> : <LeftArrow />}
              <Typography
                color={activeStep === 0 ? 'inherit' : 'primary'}
                variant="display3"
              >
                BACK
              </Typography>
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Introduction);
