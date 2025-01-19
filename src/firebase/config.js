import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa-GuqOt3qCr5z-VqWgw0OL4mJcFgKj8E",
  authDomain: "miniblog-8b44c.firebaseapp.com",
  projectId: "miniblog-8b44c",
  storageBucket: "miniblog-8b44c.firebasestorage.app",
  messagingSenderId: "540331642617",
  appId: "1:540331642617:web:324f176606678e7dd4dc28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
