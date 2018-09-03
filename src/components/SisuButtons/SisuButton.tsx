import * as React from "react";
import WideButton from "../WideButton/WideButton";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as theme from "../../styleguide/theme";
type Props = {
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  buttonType?: string;
  to?: string | null;
  children: React.ReactNode;
  width: string;
  disabled?: boolean;
};
const SisuButton: React.SFC<Props> = ({
  onClick,
  children,
  to,
  buttonType,
  width,
  disabled
}) => {
  let bgColor;
  let color;
  let backgroundColor;
  if (buttonType === "greyed") {
    backgroundColor = theme.PCL;
    bgColor = "";
    color = theme.PWH;
  } else {
    bgColor = theme.PG;
    color = theme.PWH;
    backgroundColor = "white";
  }

  const wideButton = (
    <WideButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      backgroundColor={backgroundColor}
      height="50px"
      disabled={disabled}
      noBoxShadow={true}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="display3"
          color={buttonType === "greyed" ? "primary" : "inherit"}
          align="center"
        >
          {children}
        </Typography>
      </div>
    </WideButton>
  );
  return (
    <div
      style={{
        width: width
      }}
    >
      {to ? (
        <Link
          style={{
            textDecoration: "none",
            color: "white"
          }}
          to={to}
        >
          {wideButton}
        </Link>
      ) : (
        wideButton
      )}
    </div>
  );
};

SisuButton.defaultProps = {
  buttonType: "purple",
  width: "87%"
};

export default SisuButton;
