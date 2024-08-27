// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4AyoZSRnblCF5pniYEC_gnbdMyixmqbE",
  authDomain: "netflix-8ac66.firebaseapp.com",
  projectId: "netflix-8ac66",
  storageBucket: "netflix-8ac66.appspot.com",
  messagingSenderId: "1043922527991",
  appId: "1:1043922527991:web:b1852906211b4adedf15f2",
  measurementId: "G-9HY0DDYM7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// craete a/c on themoviedb.org and replace access token below


const TMDB_Access_Key="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTk0NTFhYTE0YTdlODNiMTAxNjE0ZDA5NzcwZDZkZSIsIm5iZiI6MTcyNDc4MTM1MS40MzE4MDcsInN1YiI6IjY2Y2UxMWM0ZDIwZmZhZTg0NGJkMTg5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIBEokLr1z_CKpwiNXSrVGdFxViF8jKaGL-n0QXtdDE";


  export {firebaseConfig, TMDB_Access_Key};