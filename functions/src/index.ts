// import * as moment from 'moment-timezone';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';
import * as util from './functionsUtil';
import { google } from 'googleapis';
const { key } = util;
const addZero = (min: any) => (min < 10 ? '0' + min : min);
const getAccessToken = () => {
  return new Promise(function(resolve, reject) {
    const jwtClient = new google.auth.JWT(
      key.client_email,
      undefined,
      key.private_key,
      'https://www.googleapis.com/auth/firebase.messaging',
      undefined
    );
    jwtClient.authorize(function(err: any, tokens: any) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
};
const hourStampToMinutes = (hourStamp: any) => +hourStamp.slice(3);
const hourStampToHours = (hourStamp: any) => +hourStamp.slice(0, 2);
const checkIfItsTimeForPill = (currentTime: any, pillTime: any) => {
  const currentHour = hourStampToHours(currentTime);
  const currentMinutes = hourStampToMinutes(currentTime);
  const pillHour = hourStampToHours(pillTime);
  const pillMinutes = hourStampToMinutes(pillTime);
  const shouldTakePill =
    currentHour === pillHour && currentMinutes === pillMinutes;
  return shouldTakePill;
};
const haveTwelveHoursPastSincePill = (currentTime: any, lastTimeTaken: any) => {
  const currentHour = hourStampToHours(currentTime);
  const pillHour = hourStampToHours(lastTimeTaken);
  if (pillHour <= 12) {
    return currentHour - 12 >= pillHour;
  }
  if (pillHour > 12) {
    return currentHour <= 12
      ? currentHour + 12 >= pillHour
      : pillHour > currentHour;
  }
  return false;
};

const sendMessage = (privateKey: any, notificationKey: any, userId: any) => {
  return new Promise((resolve, reject) => {
    const url =
      'https://fcm.googleapis.com/v1/projects/bluemarble-a4f07/messages:send';
    const config = {
      headers: {
        Authorization: 'Bearer ' + privateKey,
        'Content-Type': 'application/json'
      }
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
              userId: userId
            },
            click_action: 'https://bluemarble-a4f07.firebaseapp.com/',
            actions: [
              {
                title: 'Take pill',
                action: 'takePill',
                icon:
                  'https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/pillIcon.png'
              }
            ]
          }
        },
        token: notificationKey
      }
    };

    axios
      .post(url, messagePayload, config)
      .then(() => {
        console.log('ACTUALLY SENDING A NOTIFICATION!!');
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject();
      });
  });
};
admin.initializeApp(functions.config().firebase);
const database = admin.database();
export const sendAndManageNotifications = functions.https.onRequest(
  async (request: any, response: any) => {
    response.send('sendAndManageNotifications');
    try {
      const getHourStamp = () => {
        const date = new Date();
        date.setHours(date.getHours() + 3);
        date.setMinutes(date.getMinutes() + 1);
        return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
      };
      const currentTime = getHourStamp();
      console.log(`Hour in function: ${currentTime}`);
      const getUsers = await axios.get(
        'https://bluemarble-a4f07.firebaseio.com/users.json'
      );
      const users = getUsers.data;
      const usersThatNeedToBeNotified = [];
      const privateKey = await getAccessToken();
      for (const user in users) {
        const userPillTime = users[user].settings.alarm.pillhour;
        const notificationToken = users[user].notifications.token;
        const isItTimeForPill = checkIfItsTimeForPill(
          currentTime,
          userPillTime
        );
        const hasUserTakenPillToday = users[user].dailyPill.taken;
        const lastTimeTaken = users[user].dailyPill.lasttimetaken;
        if (isItTimeForPill && !hasUserTakenPillToday) {
          usersThatNeedToBeNotified.push({
            notificationToken: notificationToken,
            userId: user
          });
          console.log(
            `send message to: ${users[user].settings.account.username}`
          );
        }
        if (
          hasUserTakenPillToday &&
          haveTwelveHoursPastSincePill(currentTime, lastTimeTaken)
        ) {
          console.log('has taken pill: ' + hasUserTakenPillToday);
          console.log(
            'have 12 hours passed: ' +
              haveTwelveHoursPastSincePill(currentTime, lastTimeTaken)
          );
          await database.ref(`users/${user}/dailyPill/taken`).set(false);
        }
      }
      if (usersThatNeedToBeNotified.length) {
        const requestArray = usersThatNeedToBeNotified.map((user: any) => {
          return sendMessage(privateKey, user.notificationToken, user.userId);
        });
        console.log(new Date());
        await Promise.all(requestArray);
      }
    } catch (error) {
      console.log(error);
    }
  }
);
