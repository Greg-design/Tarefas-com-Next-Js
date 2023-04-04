import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqF4J7BT1mA77lEqmxwHH4a39vbi6q30w",
  authDomain: "tarefasplus-8baa2.firebaseapp.com",
  projectId: "tarefasplus-8baa2",
  storageBucket: "tarefasplus-8baa2.appspot.com",
  messagingSenderId: "1045613355879",
  appId: "1:1045613355879:web:a3d1dcf6652e9bf763c5c2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
