import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOvZnnwHxuGFKPbAcgZDxhPX9bFZ7vnGI",
  authDomain: "cursomatheusfraga.firebaseapp.com",
  projectId: "cursomatheusfraga",
  storageBucket: "cursomatheusfraga.firebasestorage.app",
  messagingSenderId: "507429172888",
  appId: "1:507429172888:web:af3c194fcd75b7f909c2ed",
  measurementId: "G-JP23GHNXNE"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)

export { db, auth };