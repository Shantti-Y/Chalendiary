import * as firebase from 'firebase/app';
import 'firebase/auth';

// TODO: read json file to apply config instead of embedding directly
const firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase.auth();