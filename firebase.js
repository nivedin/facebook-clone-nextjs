import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCC9syr0FUWQQl2fo2n4S18_JIWCLWNTAQ",
  authDomain: "facebook-clone-9d048.firebaseapp.com",
  projectId: "facebook-clone-9d048",
  storageBucket: "facebook-clone-9d048.appspot.com",
  messagingSenderId: "472399750017",
  appId: "1:472399750017:web:5de09677b27c6dc5143e80",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
