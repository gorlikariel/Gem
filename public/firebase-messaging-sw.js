importScripts('src/util/firebaseUtil.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-database.js');
const config = {
  apiKey: 'AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU',
  authDomain: 'bluemarble-a4f07.firebaseapp.com',
  databaseURL: 'https://bluemarble-a4f07.firebaseio.com',
  projectId: 'bluemarble-a4f07',
  storageBucket: 'bluemarble-a4f07.appspot.com',
  messagingSenderId: '1048550758125'
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
const database = firebase.database();
const setPillTaken = async userId => {
  await database.ref(`users/${userId}/dailyPill/taken`).set(true);
  await database
    .ref(`users/${userId}/dailyPill/lasttimetaken`)
    .set(getHourStamp());
};

self.addEventListener('notificationclick', event => {
  setPillTaken(event.notification.data.userId);
  event.notification.close();
});

messaging.setBackgroundMessageHandler(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = 'Notification';
  const notificationOptions = {
    body: payload.data.status,
    icon: 'Images/a78af353-097a-7368-e313-48a10f967860.webPlatform.png',
    actions: [
      {
        action: 'coffee-action',
        title: 'Coffee',
        icon:
          'https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/5ccb6930-caaf-0d9a-5475-d8359cababe3.webPlatform.png'
      },
      {
        action: 'doughnut-action',
        title: 'Doughnut',
        icon:
          'https://raw.githubusercontent.com/gorlikariel/Gem/master/public/Images/5ccb6930-caaf-0d9a-5475-d8359cababe3.webPlatform.png'
      }
    ]
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
