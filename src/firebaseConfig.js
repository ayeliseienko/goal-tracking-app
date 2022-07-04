import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACE3OmgrtAICGQU8Ku6D-tHGfPppz-I0U',
  authDomain: 'goal-tracking-app-50002.firebaseapp.com',
  projectId: 'goal-tracking-app-50002',
  storageBucket: 'goal-tracking-app-50002.appspot.com',
  messagingSenderId: '663233925550',
  appId: '1:663233925550:web:71b9b1e79a10ca32e9383f',
};

// export const firebaseApp = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
