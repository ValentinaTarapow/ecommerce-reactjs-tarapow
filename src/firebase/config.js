  // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5qOCTfAufZgCOWt8a5EU6VLvBai5y6Q",
  authDomain: "escentially-tarapow.firebaseapp.com",
  projectId: "escentially-tarapow",
  storageBucket: "escentially-tarapow.appspot.com",
  messagingSenderId: "159361162873",
  appId: "1:159361162873:web:ab0d5b6a4d83ccec383ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)