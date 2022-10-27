import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZwOuXps2yn21ZzXgcK2qtzgnJKnLSAEI",
  authDomain: "chatapp-8eee0.firebaseapp.com",
  projectId: "chatapp-8eee0",
  storageBucket: "chatapp-8eee0.appspot.com",
  messagingSenderId: "699094059980",
  appId: "1:699094059980:web:2f33e180ad75b19bbaeb69",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function read() {
  const querySnapshot = await getDocs(collection(db, "messages"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

read();
