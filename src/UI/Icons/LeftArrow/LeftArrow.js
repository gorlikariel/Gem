import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  }
});

function LeftArrow(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M11.801206,15.9527081 C12.0636718,15.9386177 12.3219916,15.8326087 12.5216055,15.6329949 L18.6771725,9.47742792 C19.1081892,9.04641123 19.1080934,8.34265457 18.6739703,7.90853163 L18.6362431,7.87080444 C18.2074664,7.4420277 17.4997013,7.43524772 17.0673468,7.86760232 L11.587602,13.3473471 L6.15203496,7.91177991 C5.72101827,7.48076322 5.0172616,7.48085909 4.58313867,7.91498203 L4.54541147,7.95270923 C4.11663474,8.38148596 4.10985475,9.08925103 4.54220935,9.52160552 L10.6977763,15.6771726 C10.9951374,15.9745336 11.4223145,16.0666978 11.801206,15.9527081 Z"
        fill="#314354"
        transform="translate(11.610438, 11.773134) rotate(90.000000) translate(-11.610438, -11.773134) "
      />
      />
    </SvgIcon>
  );
}

export default withStyles(styles)(LeftArrow);
