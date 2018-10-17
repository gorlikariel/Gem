import React, { Component } from 'react';
import * as actions from '../../../store/actions/actionsIndex';
import { connect } from 'react-redux';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';
class QuestionsPage extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.QUESTIONS_TOP_NAVIGATION);
  }

  render() {
    return <div>Ass</div>;
  }
}

//------------------------------------------------------------------------------------R -- E -- D -- U -- X -- -- T -- I -- M -- E

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: navBarConfig => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    }
  };
};

export default connect(null, mapDispatchToProps)(QuestionsPage);
