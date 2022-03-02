import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC1_hr7W2UuwO27nJK-C0-7cWHprJbAHvg",
    authDomain: "aktie-development.firebaseapp.com",
    projectId: "aktie-development",
    storageBucket: "aktie-development.appspot.com",
    messagingSenderId: "418821239006",
    appId: "1:418821239006:web:9ab479fe3b86a72cb5924f"
});

export const auth = app.auth();
export default app;