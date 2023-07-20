import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNHyMQ_r-PpGL4e2dBzJ8KfjQu7gTDK68",
  authDomain: "fir-0214.firebaseapp.com",
  projectId: "fir-0214",
  storageBucket: "fir-0214.appspot.com",
  messagingSenderId: "232311985654",
  appId: "1:232311985654:web:4cde6d86db18dc04f3a3d7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = getAuth(app);

// Export both the app and auth objects
export { app, auth };
