import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import LeftArrow from '../../Icons/LeftArrow/LeftArrow';
import RightArrow from '../../Icons/RightArrow/RightArrow';
import first from './Onboarding1.png';
import second from './Onboarding2.png';
import third from './Onboarding3.png';

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
    // flexDirection: 'column'
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
            <div key={step.paragraph} style={{ marginTop: '80px' }}>
              <img
                key={step.label}
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          ))}
        </SwipeableViews>
        {/*
        <img
          key={tutorialSteps[0].label}
          className={classes.img}
          src={tutorialSteps[0].imgPath}
          alt={tutorialSteps[0].label}
        />
        */}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <div
              key={step.imgPath}
              style={{ marginTop: '30px', color: '#8ea9c3', whiteSpace: 'pre' }}
            >
              <Typography
                key={step.label}
                align="center"
                color="primary"
                variant="display4"
              >
                {step.label}
              </Typography>
              <Typography
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
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? <RightArrow /> : <LeftArrow />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Introduction);
