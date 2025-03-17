import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'



const firebaseConfig = {
  apiKey: "AIzaSyCiO-hCgTNHy6tzMRrRWdCc_z9UENH9w_M",
  authDomain: "auth-react-6dc0f.firebaseapp.com",
  projectId: "auth-react-6dc0f",
  storageBucket: "auth-react-6dc0f.appspot.com",
  messagingSenderId: "703603090063",
  appId: "1:703603090063:web:01ba0c2a20b0a878e746fa"
};


const app = firebase.initializeApp(firebaseConfig);

export default app