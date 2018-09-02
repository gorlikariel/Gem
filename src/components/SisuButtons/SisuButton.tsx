import * as React from "react";
import WideButton from "../WideButton/WideButton";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as theme from "../../styleguide/theme";
type Props = {
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  variant?: string;
  to?: string | null;
  children: React.ReactNode;
  width: string;
  disabled?: boolean;
};
const SisuButton: React.SFC<Props> = ({
  onClick,
  children,
  to,
  variant,
  width,
  disabled
}) => {
  let bgColor = theme.PG;
  let color = theme.PWH;
  let backgroundColor = "";
  if (variant === "greyed") {
    bgColor = theme.PWL;
    color = theme.PWH;
    backgroundColor = theme.PCL;
  }
  const wideButton = (
    <WideButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      backgroundColor={backgroundColor}
      height="50px"
      disabled={disabled}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="display3"
          color={variant === "greyed" ? "primary" : "inherit"}
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
  variant: "purple",
  width: "87%"
};

export default SisuButton;
