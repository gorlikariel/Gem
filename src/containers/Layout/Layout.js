import * as React from "react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import * as theme from "../../styleguide/theme";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
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
