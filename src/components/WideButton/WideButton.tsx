import * as React from 'react';
import { ButtonBase } from '@material-ui/core';
type Props = {
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  color?: string;
  width?: string;
  height?: string;
  bgColor: string;
  disabled?: boolean;
  type?: string;
  backgroundColor?: string;
  noBoxShadow?: boolean;
  children: React.ReactNode;
};

const WideButton: React.SFC<Props> = ({
  onClick,
  color,
  children,
  width,
  height,
  bgColor,
  backgroundColor,
  disabled,
  noBoxShadow,
  type
}) => {
  const styles = {
    button: {
      width: width,
      height: height,
      borderRadius: '6px',
      marginTop: '18px',
      backgroundImage: bgColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: color,
      backgroundColor: backgroundColor,
      border: 'double 2px transparent',
      backgroundOrigin: 'border-box',
      backgroundClip: ' content-box, border-box',
      boxShadow: noBoxShadow
        ? ''
        : '0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f'
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
  type: 'button'
};

export default WideButton;
