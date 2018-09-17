import React from 'react';
import { Link } from 'react-router-dom';
import WideButton from '../../WideButton/WideButton';
import { Typography, Collapse } from '@material-ui/core';
import * as theme from '../../../styleguide/theme';
import AccountIcon from '../../../Icons/AccountIcon/AccountIcon';
import RightArrow from '../../../Icons/RightArrow/RightArrow';
import PillIcon from '../../../Icons/PillIcon/PillIcon';
import ClockIcon from '../../../Icons/ClockIcon/ClockIcon';
const SettingsButton = props => {
  const { bgColor, color, to, children, icon } = props;
  const rightArrow = <RightArrow style={{ paddingRight: '12px' }} />;
  const styles = {
    buttonIcon: {
      paddingLeft: '20px'
    },
    logoutButton: {
      width: '24px',
      paddingLeft: '20px'
    }
  };
  const icons = {
    accountIcon: <AccountIcon style={styles.buttonIcon} />,
    alarmIcon: <ClockIcon style={styles.buttonIcon} />,
    pillIcon: <PillIcon style={styles.buttonIcon} />
  };

  return (
    <Collapse in={props.in} timeout={props.timeout}>
      <Link style={{ textDecoration: 'none' }} to={to}>
        <div
          style={{
            borderImage: ' linear-gradient(to left, #743ad5 0%, #d53a9d 100%)',
            borderImageSlice: 1,
            borderWidth: '10px'
          }}
        >
          <WideButton
            onClick={props.onClick}
            bgColor={bgColor}
            color={color}
            onClick={props.onClick}
            noBoxShadow
          >
            {icons[icon]}
            <Typography
              style={{ paddingLeft: to === '/' ? '55px' : '12px' }}
              variant="display3"
              color="inherit"
            >
              {children}
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              {to === '/' ? null : rightArrow}
            </div>
          </WideButton>
        </div>
      </Link>
    </Collapse>
  );
};
export default SettingsButton;
