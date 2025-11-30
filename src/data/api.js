// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// No realtime features
import {
   getFirestore,
   collection,
   getDocs,
   doc,
   query,
   where,
   getDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: `${import.meta.env.FIRESTORE_API_KEY}`,
   authDomain: `${import.meta.env.FIRESTORE_AUTH_DOMAIN}`,
   projectId: "vanlife-66577",
   storageBucket: "vanlife-66577.firebasestorage.app",
   messagingSenderId: "1072419321400",
   appId: "1:1072419321400:web:edaf9759fee9492dcb98cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans");

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
   return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function getVans() {
   const snapshot = await getDocs(vansCollectionRef);
   const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
   }));

   return vans;
}

export async function getVan(id) {
   const docRef = doc(db, "vans", id);
   const snapshot = await getDoc(docRef);
   const van = {
      ...snapshot.data(),
      id: snapshot.id,
   };

   return van;
}

export async function getHostVans() {
   const q = query(vansCollectionRef, where("hostId", "==", "123"));
   const snapshot = await getDocs(q);
   const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
   }));
   return vans;
}

export async function loginUser(creds) {
   const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(creds),
   });
   const data = await res.json();

   if (!res.ok) {
      throw {
         message: data.message,
         statusText: res.statusText,
         status: res.status,
      };
   }

   return data;
}
