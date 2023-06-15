 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHnQRc7hLiwfe6TSEa2SvhoeLkjwHrsCU",
  authDomain: "portfolio-ahtesham.firebaseapp.com",
  projectId: "portfolio-ahtesham",
  storageBucket: "portfolio-ahtesham.appspot.com",
  messagingSenderId: "238936444143",
  appId: "1:238936444143:web:44f19f28582712f234df1a"
};
 
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();