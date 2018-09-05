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
    label: 'SHIT FUCK',
    imgPath: first
  },
  {
    label: 'SHIT ass',
    imgPath: second
  },
  {
    label: 'SHIT DICK',
    imgPath: third
  }
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  img: {
    height: '100%',
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%'
  },
  mobileStepper: {
    backgroundColor: 'inherit'
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
            <img
              key={step.label}
              className={classes.img}
              src={step.imgPath}
              alt={step.label}
            />
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
              {theme.direction === 'rtl' ? <LeftArrow /> : <RightArrow />}
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
