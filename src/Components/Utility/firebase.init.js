// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkcL2FYsfpBhmJu4gZBmykTrUC4es4_IM",
    authDomain: "simple-firebase-d1bef.firebaseapp.com",
    projectId: "simple-firebase-d1bef",
    storageBucket: "simple-firebase-d1bef.firebasestorage.app",
    messagingSenderId: "584927715604",
    appId: "1:584927715604:web:382397d7c913e82df06201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;