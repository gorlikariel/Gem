import * as actions from '../../../store/actions/actionsIndex';
import * as React from 'react';
import { connect } from 'react-redux';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';
import SearchField from '../../../components/SearchField/SearchField';

interface QuestionsPageProps {
  onInitPage: Function;
}

class QuestionsPage extends React.Component<QuestionsPageProps> {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.QUESTIONS_TOP_NAVIGATION);
  }

  render() {
    const styles = {
      root: {
        marginTop: '118px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      } as React.CSSProperties
    };
    return (
      <div style={styles.root}>
        <SearchField />
      </div>
    );
  }
}

//------------------------------------------------------------------------------------R -- E -- D -- U -- X -- -- T -- I -- M -- E

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onInitPage: (navBarConfig: object) => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    }
  };
};

export default connect(null, mapDispatchToProps)(QuestionsPage);
