import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyAVvhdmN2hhzaaK2wJToGnVYum0bSktpLw',
  authDomain: 'nativetutor-a42de.firebaseapp.com',
  databaseURL:
    'https://nativetutor-a42de-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nativetutor-a42de',
  storageBucket: 'nativetutor-a42de.appspot.com',
};

export const initialiseFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
};
