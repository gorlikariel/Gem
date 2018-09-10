import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import QuestionMark from '../../Icons/QuestionMark/QuestionMark';
import HomeIcon from '../../Icons/HomeIcon/HomeIcon';
import StatisticsIcon from '../../Icons/StatisticsIcon/StatisticsIcon';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
const HOME_BUTTON = 1;

const styles = {
  root: {
    marginRight: '20px',
    width: '100%',
    bottom: 0,
    right: 0,
    left: 0,
    position: 'fixed',
    backgroundColor: 'inherit'
  }
};
class BottomNavbar extends React.Component {
  state = {
    value: HOME_BUTTON
  };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ event });
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
  };
  //change values to strings and export them to a different file
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
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

export default withRouter(withStyles(styles)(BottomNavbar));
