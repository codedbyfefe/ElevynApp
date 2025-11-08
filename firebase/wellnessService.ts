import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { SPOONACULAR_API_KEY } from "../src/config/env";
import { db } from "./firebaseConfig";

/******************************
 * SAVE NUTRITION ENTRY (FIREBASE)
 ******************************/
export const addNutritionEntry = async (
  userId: string,
  meal: string,
  calories: number,
  protein: number,
  carbs: number,
  fat: number
) => {
  try {
    await addDoc(collection(db, "nutritionLogs"), {
      userId,
      meal,
      calories,
      protein,
      carbs,
      fat,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error adding nutrition entry:", error);
    throw error;
  }
};

/******************************
 * GET USER NUTRITION ENTRIES
 ******************************/
export const getNutritionEntries = async (userId: string) => {
  try {
    const q = query(collection(db, "nutritionLogs"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching nutrition logs:", error);
    throw error;
  }
};

/******************************
 * FETCH MEAL / RECIPE SUGGESTIONS (API)
 ******************************/
export const fetchRecipeSuggestions = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=3&tags=high-protein,healthy&apiKey=${SPOONACULAR_API_KEY}`
    );

    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.error(" Error fetching recipe suggestions:", error);
    throw error;
  }
};

/******************************
 * SAVE WELLNESS LOG (SLEEP / STRESS / ACTIVITY / NOTES)
 ******************************/
export const saveWellnessLog = async (userId: string, logData: any) => {
  try {
    await addDoc(collection(db, "wellnessLogs"), {
      userId,
      ...logData,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error saving wellness log:", error);
    throw error;
  }
};
