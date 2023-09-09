import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0sY_L21N93CQAcHz4elNLhSs7rs3isvI",
    authDomain: "attendance-app01.firebaseapp.com",
    projectId: "attendance-app01",
    storageBucket: "attendance-app01.appspot.com",
    messagingSenderId: "962516244352",
    appId: "1:962516244352:ios:3ae4932401cf0a9f911365"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase;
