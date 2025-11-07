import { db } from "firebase/firebaseConfig";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";

export const addJournalEntry = async (userId: string, content: string) => {
  try {
    await addDoc(collection(db, "journalEntries"), {
      userId,
      content,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error saving journal entry:", error);
    throw error;
  }
};

export const getJournalEntries = async (userId: string) => {
  try {
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
