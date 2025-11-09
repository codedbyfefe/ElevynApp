
import { auth, db } from "@/app/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

let authChangeListener: ((user: User | null) => void) | null = null;
export const setAuthChangeListener = (callback: (user: User | null) => void) => {
  authChangeListener = callback;
};

// Internal function to trigger listener
const triggerAuthChange = (user: User | null) => {
  if (authChangeListener) authChangeListener(user);
};

// Register new user
export const registerUser = async (name: string, surname: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: `${name} ${surname}` });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      surname,
      email,
      createdAt: new Date().toISOString(),
    });

    triggerAuthChange(user); // notify listeners

    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Login existing user
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    triggerAuthChange(user); // notify listeners
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    triggerAuthChange(null); // notify listeners
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};
