import * as React from "react";
import Layout from "./containers/Layout/Layout";
import { Route } from "react-router-dom";
import Settings from "./containers/Settings/Settings";

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Route path="/" component={Settings} />
      </Layout>
    );
  }
}

export default App;
