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
  const notificationTitle = 'Holy shit';
  const notificationOptions = {
    body: payload.data.status,
    icon: 'Images/a78af353-097a-7368-e313-48a10f967860.webPlatform.png'
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
