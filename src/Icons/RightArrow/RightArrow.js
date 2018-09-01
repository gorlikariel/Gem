import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    // display: "flex"
    // alignItems: "flex-end"
  }
});

function LeftArrow(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M12.5803307,16.4064398 C12.8427965,16.3923494 13.1011163,16.2863405 13.3007302,16.0867266 L19.4562972,9.93115964 C19.8873139,9.50014295 19.887218,8.79638629 19.453095,8.36226335 L19.4153678,8.32453616 C18.9865911,7.89575942 18.278826,7.88897944 17.8464715,8.32133404 L12.3667267,13.8010788 L6.93115964,8.36551164 C6.50014295,7.93449494 5.79638629,7.93459082 5.36226335,8.36871375 L5.32453616,8.40644095 C4.89575942,8.83521768 4.88897944,9.54298275 5.32133404,9.97533724 L11.476901,16.1309043 C11.7742621,16.4282653 12.2014392,16.5204295 12.5803307,16.4064398 Z"
        id="Mask"
        fill="inherit"
        fillRule="nonzero"
        transform="translate(12.389562, 12.226866) rotate(-90.000000) translate(-12.389562, -12.226866) "
      />
      /> />
    </SvgIcon>
  );
}

export default withStyles(styles)(LeftArrow);
