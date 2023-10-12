// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYE4bAtXuUaOaG0GM_oeqXcGGpcNXR-bA",
  authDomain: "netflix-clone-f84ab.firebaseapp.com",
  projectId: "netflix-clone-f84ab",
  storageBucket: "netflix-clone-f84ab.appspot.com",
  messagingSenderId: "232890640732",
  appId: "1:232890640732:web:3845af67e85d3b5881b999"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }