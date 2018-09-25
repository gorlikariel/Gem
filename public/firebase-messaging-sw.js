importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');
firebase.initializeApp({
  messagingSenderId: '1048550758125'
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
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
