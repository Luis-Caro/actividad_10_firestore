import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLVD1KKA8Ouj9YNumEwLXrgXCum4-AXho",
  authDomain: "actividad-10-utch-7840b.firebaseapp.com",
  databaseURL: "https://actividad-10-utch-7840b-default-rtdb.firebaseio.com",
  projectId: "actividad-10-utch-7840b",
  storageBucket: "actividad-10-utch-7840b.appspot.com",
  messagingSenderId: "1080257347651",
  appId: "1:1080257347651:web:524af0264caf9f0a7c14f6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
