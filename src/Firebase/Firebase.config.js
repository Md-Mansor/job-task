// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8kNgNnLIGAHWPv5FtNN7fRt3g8ipaiRY",
    authDomain: "to-do-application-265f3.firebaseapp.com",
    projectId: "to-do-application-265f3",
    storageBucket: "to-do-application-265f3.appspot.com",
    messagingSenderId: "591721189755",
    appId: "1:591721189755:web:d1ab36ec35d96f7770adde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app