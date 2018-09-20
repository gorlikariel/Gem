import React, { Component } from "react";

const asyncComponent = importedComponent => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importedComponent().then(cmp => {
                this.setState({ component: cmp.default });
            });
        }

        render() {
            const Component = this.state.component;

            return Component ? <Component {...this.props} /> : null;
        }
    };
};

export default asyncComponent;
