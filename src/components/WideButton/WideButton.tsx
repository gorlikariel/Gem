import * as React from 'react';
import { ButtonBase } from '@material-ui/core';
import { boxShadows } from '../../styleguide/theme';
type Props = {
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  color?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  type?: string;
  backgroundColor?: string;
  noBoxShadow?: boolean;
  marginTop?: string;
  bgImg: string;
  children: React.ReactNode;
};

const WideButton: React.SFC<Props> = ({
  onClick,
  color,
  children,
  width,
  height,
  bgImg,
  backgroundColor,
  disabled,
  noBoxShadow,
  type,
  marginTop
}) => {
  const styles = {
    button: {
      width: width,
      height: height,
      borderRadius: '6px',
      marginTop: marginTop,
      backgroundImage: bgImg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: color,
      backgroundColor: backgroundColor,
      boxShadow: noBoxShadow ? '' : boxShadows.wideButton
    } as React.CSSProperties
  };

  return (
    <div>
      <ButtonBase
        type={type}
        disabled={disabled}
        onClick={onClick}
        style={styles.button}
      >
        {children}
      </ButtonBase>
    </div>
  );
};
WideButton.defaultProps = {
  width: '100%',
  height: '64px',
  noBoxShadow: false,
  type: 'button',
  marginTop: '18px'
};

export default WideButton;
