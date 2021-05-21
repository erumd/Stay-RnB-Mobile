import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: 'AIzaSyB3b3oSa-zGadWW49Isi23G_9RYUmSkeMY',
  authDomain: 'stay-rnb-456de.firebaseapp.com',
  databaseURL: 'https://stay-rnb-456de-default-rtdb.firebaseio.com',
  projectId: 'stay-rnb-456de',
  storageBucket: 'stay-rnb-456de.appspot.com',
  messagingSenderId: '466254791780',
  appId: '1:466254791780:web:3c6f5b6ec46ab5771f8b71',
  measurementId: 'G-NM6HMTLDV7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export const auth = app.auth()
export default firebase;
