import * as React from "react";
import TopNavigation from "../../UI/TopNavigation/TopNavigation";
import BodyBackgroundColor from "react-body-backgroundcolor";
import BottomNavbar from "../../UI/BottomNavbar/BottomNavbar";
import * as theme from "../../UI/theme/theme";
class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BodyBackgroundColor backgroundColor={theme.PWL}>
          <div
            style={{
              marginRight: "20px",
              marginLeft: "20px"
            }}
          >
            {this.props.children}
          </div>
        </BodyBackgroundColor>
        <BottomNavbar />
      </React.Fragment>
    );
  }
}

export default Layout;
