import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

function PillIocn(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M12,5 C6.9375,5 3,7.1375 3,9.875 L3,14.375 C3,17.1125 6.9375,19.25 12,19.25 C17.0625,19.25 21,17.1125 21,14.375 L21,9.875 C21,7.1375 17.0625,5 12,5 Z M4.5,14.3010949 L4.5,12.5 C6.1125,13.8412409 8.85,14.6843066 12,14.6843066 C13.05,14.6843066 14.0625,14.5693431 15,14.4160584 L15,17.4434307 C14.1,17.6350365 13.0875,17.75 12,17.75 C7.575,17.75 4.5,15.9489051 4.5,14.3010949 Z M16.5,17 L16.5,14.0254237 C17.7,13.6440678 18.75,13.1101695 19.5,12.5 L19.5,14.2923729 C19.5,15.2838983 18.375,16.3135593 16.5,17 Z M7.14286788,7.30327786 L14.2888165,13.089953 C13.5672787,13.1938885 12.798201,13.25 12,13.25 C7.85786438,13.25 4.5,11.738961 4.5,9.875 C4.5,8.84476061 5.52580733,7.92233678 7.14286788,7.30327786 Z M8.85870529,6.80939985 C9.81422897,6.61079838 10.8783608,6.5 12,6.5 C16.1421356,6.5 19.5,8.01103897 19.5,9.875 C19.5,11.053118 18.1585728,12.0902479 16.1255426,12.6939687 L8.85870529,6.80939985 Z"
        id="path-1"
      />
      /> />
    </SvgIcon>
  );
}

export default withStyles(styles)(PillIocn);
