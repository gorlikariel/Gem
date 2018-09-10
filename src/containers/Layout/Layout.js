import * as React from "react";
import * as theme from "../../styleguide/theme";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div
            style={{
              marginRight: "20px",
              marginLeft: "20px"
            }}
          >
            {this.props.children}
          </div>
      </React.Fragment>
    );
  }
}

export default Layout;
