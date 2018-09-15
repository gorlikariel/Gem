import React, { Component } from 'react';
import { Typography, Collapse } from '@material-ui/core';
import GemIcon from '../../Icons/GemIcon/sisuLogo.png';
import { Link } from 'react-router-dom';
import WideButton from '../../components/WideButton/WideButton';
import theme from '../../styleguide/theme';
import SisuButton from '../../components/SisuButtons/SisuButton';
import GemText from '../../Icons/GemIcon/GemText';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import * as topNavConfig from '../../store/actions/topNavigationConfigs';

const styles = {
  root: {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  subtitle: {
    paddingBottom: '50px',
    paddingTop: '12px'
  },
  gemLogo: { margin: '20px' }
};

class SisuMain extends Component {
  componentDidMount() {
    this.props.onInitPage(topNavConfig.SISU_TOP_NAVIGATION);
  }
  state = { loaded: false };
  render() {
    const { root, buttons, subtitle, gemLogo } = styles;
    const SisuMain = (
      <React.Fragment>
        <GemText />
        <div style={subtitle}>
          <Typography align="center" variant="display3">
            Never miss a pill ever again.
          </Typography>
        </div>
        <div style={buttons}>
          <SisuButton width="100%" to={'login'}>
            Login
          </SisuButton>
          <SisuButton width="100%" buttonType="greyed" to={'register'}>
            Register
          </SisuButton>
        </div>
      </React.Fragment>
    );
    return (
      <div style={root}>
        <Collapse in={this.state.loaded} timeout={400}>
          <div style={gemLogo}>
            <img
              style={{
                display: `${this.state.loaded ? 'inline-block' : 'none'}`
              }}
              width="60px"
              height="71"
              src={GemIcon}
              alt="logo"
              onLoad={() => this.setState({ loaded: true })}
            />
          </div>
        </Collapse>
        {this.state.loaded ? SisuMain : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPage: navBarConfig => {
      dispatch(actions.setTopNavigationState(navBarConfig));
    }
  };
};

export default connect(null, mapDispatchToProps)(SisuMain);
