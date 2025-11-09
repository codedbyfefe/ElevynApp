import { db } from "@/app/firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Helper: Merge arrays of objects by 'id', keeping the latest incoming data
const mergeArraysById = <T extends { id: string }>(existing: T[] = [], incoming: T[] = []) => {
  const map = new Map<string, T>();

  // Add existing items first
  existing.forEach(item => map.set(item.id, item));

  // Overwrite or add new items from incoming
  incoming.forEach(item => map.set(item.id, item));

  return Array.from(map.values());
};

// Save user data with smart merging
export const saveUserData = async (userId: string, newData: any) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    let mergedData = { ...newData };

    if (docSnap.exists()) {
      const existingData = docSnap.data();

      // Merge arrays properly
      mergedData.gameStats = mergeArraysById(existingData.gameStats, newData.gameStats);
      mergedData.workouts = mergeArraysById(existingData.workouts, newData.workouts);
      mergedData.assignments = mergeArraysById(existingData.assignments, newData.assignments);

      // Merge academics
      mergedData.academics = { ...existingData.academics, ...newData.academics };
    }

    await setDoc(docRef, mergedData, { merge: true });
    console.log("Data saved successfully");
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

// Fetch user data
export const fetchUserData = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    return null;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};
