import * as React from 'react';
import { Link } from 'react-router-dom';
import WideButton from '../../WideButton/WideButton';
import { Typography, Collapse } from '@material-ui/core';
import AccountIcon from '../../../Icons/AccountIcon/AccountIcon';
import RightArrow from '../../../Icons/RightArrow/RightArrow';
import PillIcon from '../../../Icons/PillIcon/PillIcon';
import ClockIcon from '../../../Icons/ClockIcon/ClockIcon';
interface SettingsButtonProps {
  bgColor: string;
  color: string;
  to: string;
  icon?: string;
  timeout?: number;
  onClick?: React.EventHandler<any>;
  in?: boolean;
}

const SettingsButton: React.SFC<SettingsButtonProps> = props => {
  const { bgColor, color, to, children, icon, timeout, onClick } = props;
  const rightArrow = <RightArrow style={{ paddingRight: '12px' }} />;
  const styles = {
    buttonIcon: {
      paddingLeft: '20px'
    },
    logoutButton: {
      width: '24px',
      paddingLeft: '20px'
    },
    rightArrow: { marginLeft: 'auto' },
    buttonText: { paddingLeft: to === '/' ? '55px' : '12px' },
    link: { textDecoration: 'none' }
  };
  const icons = {
    accountIcon: <AccountIcon style={styles.buttonIcon} />,
    alarmIcon: <ClockIcon style={styles.buttonIcon} />,
    pillIcon: <PillIcon style={styles.buttonIcon} />
  };

  return (
    <Collapse in={props.in} timeout={timeout}>
      <Link style={styles.link} to={to}>
        <WideButton onClick={onClick} bgColor={bgColor} color={color}>
          {icon ? icons[icon] : null}
          <Typography
            style={styles.buttonText}
            variant="display3"
            color="inherit"
          >
            {children}
          </Typography>
          <div style={styles.rightArrow}>{to === '/' ? null : rightArrow}</div>
        </WideButton>
      </Link>
    </Collapse>
  );
};
export default SettingsButton;
