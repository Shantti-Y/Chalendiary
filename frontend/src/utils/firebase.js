import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '@assets/config/firebase.json';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase.auth();