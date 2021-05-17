import * as firebase from 'firebase';

const firebaseConfig = {
    /* Add your Firebase configuration here
*/
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;