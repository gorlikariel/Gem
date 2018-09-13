import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../../../components/InputField/InputField';
import * as actions from '../../../store/actions/actionsIndex';
import CircleLoader from 'react-spinners/CircleLoader';
import * as topNavConfig from '../../../store/actions/topNavigationConfigs';
import axios from 'axios';
import WideButton from '../../../components/WideButton/WideButton';
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
  }
  state = {
    messageToken: null
  };

  testMessage = () => {
    var request = require('request');
    var headers = {
      Authorization:
        'key=AAAA9CJ-1u0:APA91bEJ6m39q_NstcYsqc_Pk6o9ughLUUZ-rnRiAQHc-mhwlWqJ02yFeKqlbPHyzwf9Vcs-VC6LVHvGKWMXqmS2Nd__CRzyP0pYh9SJLsECsDLX9PSAlId2ypfe9d78lrVwAGovQcuvpaohpzfdCqRCVjnOB0jIKA',
      'Content-Type': 'application/json'
    };

    // var dataString = `{"to":"${
    //   this.state.messageToken
    // }","priority":"high","notification":{"body": "FOO BAR BLA BLA"}}`;
    var dataString = `{"to":"fkhAol3o-5Y:APA91bFlm8CWZpQlq7X8qL5X_Hn7TBQ9HcafHgAr-8YiGEynQVEeMUDlIIIojkjUIDuHCcf9UXQqntSLkjZdtq7Upl5PzHBYI_eF9YlNNNzf8Iahno6TyCv7KNxjSvJsD39PTFz5CXLu","priority":"high","notification":{"actions": [{ "action": "yes", "title": "Yes"},{ "action": "no", "title": "No"}],"vibrate": [200, 100, 200, 100, 200, 100, 400],"title":"It's time for your pill","icon":"https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/be4291d8-dbc6-5e44-700d-3d8eb3707ada.webPlatform.png"}}`;

    var options = {
      url: 'https://fcm.googleapis.com/fcm/send',
      method: 'POST',
      headers: headers,
      body: dataString
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
      text: {
        width: '100%'
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
        {formElementsArray.map(formElement => (
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
        ))}
      </form>
    );

    return (
      <div style={{ marginTop: 80 }}>
        {this.props.loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '100px'
            }}
          >
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
        <WideButton onClick={this.testMessage}>Test Push</WideButton>
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
