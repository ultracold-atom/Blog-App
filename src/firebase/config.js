import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCUymrA6V2y-t5krUophZbCHlMglENzS0k",
    authDomain: "blog-app-31906.firebaseapp.com",
    projectId: "blog-app-31906",
    storageBucket: "blog-app-31906.appspot.com",
    messagingSenderId: "830890922905",
    appId: "1:830890922905:web:825ef1f476bea69987f908"
  };


initializeApp(firebaseConfig)

const db = getFirestore();

const timeStamp = serverTimestamp()

export {db,timeStamp}