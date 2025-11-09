// src/services/journalService.ts
import { db } from "firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

/**
 * Add a new journal entry for the logged-in user
 */
export const addJournalEntry = async (userId: string, content: string) => {
  try {
    await addDoc(collection(db, "journalEntries"), {
      userId,
      content,
      timestamp: serverTimestamp(), // ✅ Use server time for consistency
    });
  } catch (error) {
    console.error("Error saving journal entry:", error);
    throw error;
  }
};

/**
 * Fetch all journal entries for a specific user, sorted by most recent
 */
export const getJournalEntries = async (userId: string) => {
  try {
    // ✅ This query needs a Firestore composite index (userId + timestamp)
    const q = query(
      collection(db, "journalEntries"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching journal entries:", error);
    throw error;
  }
};
