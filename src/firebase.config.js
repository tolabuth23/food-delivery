import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBQQHWkKbgzdAfuzyn6aCpMS5F9Mp33Ysw",
    authDomain: "restaurantapp-3f5d7.firebaseapp.com",
    databaseURL: "https://restaurantapp-3f5d7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-3f5d7",
    storageBucket: "restaurantapp-3f5d7.appspot.com",
    messagingSenderId: "906077809123",
    appId: "1:906077809123:web:6eb05bfdbb4dedd694d8d6"
  };
  

const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {app, firestore, storage};
