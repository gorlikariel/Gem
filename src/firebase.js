import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBq_VbcsnwxgnTS05jOWVeqMhgNI40J1rU",
  authDomain: "bluemarble-a4f07.firebaseapp.com",
  databaseURL: "https://bluemarble-a4f07.firebaseio.com",
  projectId: "bluemarble-a4f07",
  storageBucket: "bluemarble-a4f07.appspot.com",
  messagingSenderId: "1048550758125"
};
firebase.initializeApp(config);

export default firebase;
