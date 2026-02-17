import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBren6Hw1v6wpdqwP6SMQbsju0S7bWUsDw",
  authDomain: "electrict-scooter.firebaseapp.com",
  projectId: "electrict-scooter",
  storageBucket: "electrict-scooter.firebasestorage.app",
  messagingSenderId: "760140886049",
  appId: "1:760140886049:web:2ac9044aba8e69dd2fb360",
  measurementId: "G-D0CVB7T0MW"
};

export const FirebaseContext = createContext(null);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function FirebaseProvider({ children }) {
  const [user, setUser] = useState(null);

  // ---------------- REGISTER ----------------
  const registerUser = async (name, email, password) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);

      // Save extra info in Firestore
      await setDoc(doc(firestore, 'users', firebaseUser.uid), {
        name,
        email,
        role: 'user',
        createdAt: new Date()
      });

      // Optional: prevent auto-login
      await signOut(auth);

      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // ---------------- LOGIN ----------------
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      throw new Error("Invalid email or password");
    }
  };

  // ---------------- LOGOUT ----------------
  const logoutUser = async () => {
    await signOut(auth);
  };

  // ---------------- AUTH STATE ----------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{
      user,
      registerUser,
      loginUser,
      logoutUser,
      firestore,
      auth
    }}>
      {children}
    </FirebaseContext.Provider>
  );
}
