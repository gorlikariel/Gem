import * as React from "react";
import TopNavigation from "./containers/TopNavigation/TopNavigation";
import CenteredGrid from "./containers/CenteredGrid";

class App extends React.Component {
  public render() {
    return (
      <div>
        <TopNavigation />
        <CenteredGrid container={true} />
        {/*<BottomHalf/>*/}
      </div>
    );
  }
}

export default App;
