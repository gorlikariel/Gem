import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../../../components/InputField/InputField';
import * as actions from '../../../store/actions/actionsIndex';
import CircleLoader from 'react-spinners/CircleLoader';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';
import axios from 'axios';
import { Collapse } from '@material-ui/core';
class AccountSettings extends Component {
  componentDidMount() {
    axios
      .get(
        `https://bluemarble-a4f07.firebaseio.com/users/${
          this.props.userId
        }/notifications/token.json`
      )
      .then(res => {
        this.setState({ messageToken: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
    this.props.initNavbarConfig(
      topNavConfig.ACCOUNT_SETTINGS_TOP_NAVIGATION(
        this.props.tryUpadtingAccountSettings
      )
    );
    this.setState({ collapseFields: true });
  }
  state = {
    messageToken: null,
    collapseFields: false
  };
  testMessage = () => {
    const notificationKey =
      'c5Un1IPiHkc:APA91bEfy2QmgM818Ksnm6WoDNi28Z-ilRTJttWQ4qu9JqjRb1_Mr1yUukQ9F2h063LdgiS3VAnHnWxQKYGl0MLZCoKjLGG_ji0pBCaDxY08KlcTHBSMdJN1dE8aYxxpUpSYuhkhrnhq';
    const request = require('request');
    const headers = {
      Authorization:
        // 'key=AAAA9CJ-1u0:APA91bEJ6m39q_NstcYsqc_Pk6o9ughLUUZ-rnRiAQHc-mhwlWqJ02yFeKqlbPHyzwf9Vcs-VC6LVHvGKWMXqmS2Nd__CRzyP0pYh9SJLsECsDLX9PSAlId2ypfe9d78lrVwAGovQcuvpaohpzfdCqRCVjnOB0jIKA',
        'Bearer ya29.c.ElojBglaRzIFs8BTocLBRP3XSVdPcnfsl1Wkq0hBnRKc6INRksV1F1MUb6CwJyT_B9grkTQ4GtxuencFL52lhL_fIT8lmSJhfAHFim6Z3U3wIirZf9VLkAQnMZw',
      'Content-Type': 'application/json'
    };

    const messagePayload = {
      message: {
        webpush: {
          notification: {
            title: `It's time for your pill`,
            icon:
              'https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/be4291d8-dbc6-5e44-700d-3d8eb3707ada.webPlatform.png',
            data: {
              notificationType: 'pillReminder',
              photoId: '123456'
            },
            click_action: 'https://example.com/fish_photos',
            actions: [
              {
                title: 'Take pill',
                action: 'takePill',
                icon:
                  'https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/5ccb6930-caaf-0d9a-5475-d8359cababe3.webPlatform.webPlatform.png'
              }
            ]
          }
        },
        token: notificationKey
      }
    };
    const options = {
      url:
        'https://fcm.googleapis.com/v1/projects/bluemarble-a4f07/messages:send',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(messagePayload)
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }

    request(options, callback);
  };

  render() {
    const styles = {
      root: { marginTop: 80 },
      loader: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
      }
    };
    const formElementsArray = [];
    for (let key in this.props.form) {
      formElementsArray.push({
        id: key,
        config: this.props.form[key]
      });
    }
    let form = this.props.loading ? null : (
      <form noValidate autoComplete="off">
        {formElementsArray.map((formElement, index) => (
          <Collapse
            key={formElement.id}
            in={this.state.collapseFields}
            timeout={400 + index * 100}
          >
            <InputField
              autoFocus={formElement.id === 'email'}
              id={formElement.id}
              key={formElement.id}
              label={formElement.config.elementConfig.label}
              type={formElement.config.elementConfig.type}
              style={styles[formElement.config.elementConfig.type]}
              value={formElement.config.value}
              margin="normal"
              onChange={event =>
                this.props.onInputChangedHandler(event, formElement.id)
              }
            />
          </Collapse>
        ))}
      </form>
    );

    return (
      <div style={styles.root}>
        {this.props.loading ? (
          <div style={styles.loader}>
            <CircleLoader
              sizeUnit={'px'}
              size={50}
              color={'#757177'}
              loading={this.props.loading}
            />
          </div>
        ) : (
          form
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    form: state.accountSettings.form,
    loading: state.accountSettings.loading,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChangedHandler: (event, inputId) =>
      dispatch(actions.updateAccountSettings(event, inputId)),
    initNavbarConfig: navBarConfig =>
      dispatch(actions.setTopNavigationState(navBarConfig)),
    tryUpadtingAccountSettings: () =>
      dispatch(actions.tryUpadtingAccountSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
