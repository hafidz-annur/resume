import firebase from "firebase/app";
import "firebase/database";
let config = {
    apiKey: "AIzaSyC-GLpXGexVSeIlAp2lIpJcYsz1WFcginc",
    authDomain: "contact-me-1e577.firebaseapp.com",
    databaseURL: "https://contact-me-1e577-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-me-1e577",
    storageBucket: "contact-me-1e577.appspot.com",
    messagingSenderId: "385532957411",
    appId: "1:385532957411:web:d166449a78ca2b2c056bd6",
};
firebase.initializeApp(config);
export default firebase.database();