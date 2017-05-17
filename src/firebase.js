import * as firebase from "firebase"


const  config = {
    apiKey: "AIzaSyDGfk3jMV650IMf-Xe6860duh8oMUgiK0k",
    authDomain: "platzimusic-c2844.firebaseapp.com",
    databaseURL: "https://platzimusic-c2844.firebaseio.com",
    projectId: "platzimusic-c2844",
    storageBucket: "platzimusic-c2844.appspot.com",
    messagingSenderId: "85070023002"
  };

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDataBase = firebase.database()

export default firebase