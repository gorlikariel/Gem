import * as React from 'react';
import { ButtonBase, Typography, Fade } from '@material-ui/core';
import * as palette from '../../styleguide/theme';
import { boxShadows } from '../../styleguide/theme';
import { connect } from 'react-redux';
export class MainButton extends React.Component {
  render() {
    const styles = {
      button: {
        color: palette.PWH,
        display: 'flex',
        flexDirection: 'column',
        alignText: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: ' 264px',
        height: '264px',
        borderRadius: '50%',
        boxShadow: boxShadows.pillButtonNotTaken
      },
      isTaken: {
        notTaken: {
          backgroundImage:
            'linear-gradient(to right, #7c9dfb, #8599fb 20%, #8d95fb 40%, #9591fa 60%, #9c8cfa 80%, #a388fa)'
        },
        taken: {
          boxShadow: boxShadows.pillButtonTaken,
          border: 'solid 4px transparent',
          backgroundImage:
            'linear-gradient(to top, #f2f8fd, #e2edf9), linear-gradient(to top, #f6f6f6, #e3eef9)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          color: '#616467'
        }
      }
    };
    const { taken, hour, loading } = this.props;
    const textWhenPillNotTaken = (
      <Typography color="inherit" variant="subheading" align="center">
        {`${taken ? 'next pill' : ''} scheduled for ${!taken ? hour : ``}`}
      </Typography>
    );
    const textWhenPillTaken = (
      <React.Fragment>
        <Typography color="inherit" variant="subheading" align="center">
          {`${taken ? 'next pill' : ''} scheduled for ${!taken ? hour : ``}`}
        </Typography>
        <Typography color="inherit" variant="subheading" align="center">
          {`${taken ? 'tommorow at' : ''} ${hour}`}
        </Typography>
      </React.Fragment>
    );

    const mainButton = (
      <Fade timeout={600} in={true}>
        <ButtonBase
          onClick={this.props.onClick}
          style={Object.assign(
            {},
            styles.button,
            styles.isTaken[taken ? 'taken' : 'notTaken']
          )}
        >
          <Typography color="inherit" variant="display4" id="is-pill-taken">
            {taken ? 'PILL TAKEN' : 'TAKE PILL'}
          </Typography>
          {taken ? textWhenPillTaken : textWhenPillNotTaken}
          {/*lightning emoji represents streak, hard coded right now, will be changed */}
          <Typography color="inherit" variant="display4">
            ⚡0
          </Typography>
        </ButtonBase>
      </Fade>
    );
    return loading ? null : mainButton;
  }
}

const mapStateToProps = state => {
  return {
    taken: state.pill.taken,
    loading: state.pill.loading
  };
};

export default connect(mapStateToProps, null)(MainButton);
