import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import QuestionMark from '../../Icons/QuestionMark/QuestionMark';
import HomeIcon from '../../Icons/HomeIcon/HomeIcon';
import StatisticsIcon from '../../Icons/StatisticsIcon/StatisticsIcon';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
export const HOME_BUTTON = '1';

export interface BottomNavbarProps extends RouteComponentProps<any> {
  classes: {
    root: string;
  };
}

interface State {
  readonly value: string;
}
const BottomNavbarWithStyles = withStyles({
  root: {
    marginRight: '20px',
    width: '100%',
    bottom: 0,
    right: 0,
    left: 0,
    position: 'fixed',
    backgroundColor: 'inherit'
  }
})(
  class BottomNavbar extends React.Component<BottomNavbarProps, State> {
    state = {
      value: HOME_BUTTON
    };

    handleChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      value: string
    ) => {
      this.setState({ value: value });
      switch (value) {
        case HOME_BUTTON:
          this.props.history.push({
            pathname: '/',
            state: {
              showLeftArrow: false,
              showSubmit: false,
              title: ''
            }
          });
          break;

        default:
          break;
      }
      console.log(event);
      console.log(value);
    };
    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
        <BottomNavigation
          value={~~value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction icon={<StatisticsIcon />} />
          <BottomNavigationAction icon={<HomeIcon />} />
          <BottomNavigationAction icon={<QuestionMark />} />
        </BottomNavigation>
      );
    }
  }
);

export default withRouter(BottomNavbarWithStyles);
