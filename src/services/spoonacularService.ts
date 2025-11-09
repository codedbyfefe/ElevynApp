import { SPOONACULAR_API_KEY } from "../../src/config/env";

export interface SpoonNutrient {
  name: string;
  amount: number;
  unit?: string;
}

export interface SpoonRecipe {
  id?: number;
  title: string;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  nutrition?: {
    nutrients?: SpoonNutrient[];
  };
}

export const fetchMealSuggestions = async (count = 3): Promise<SpoonRecipe[]> => {
  if (!SPOONACULAR_API_KEY) {
    console.warn("Missing Spoonacular API key — returning empty array.");
    return [];
  }

  const url = `https://api.spoonacular.com/recipes/random?number=${count}&tags=high-protein,healthy&includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`;

  try {
    const resp = await fetch(url);
    const json = await resp.json();

    if (!resp.ok || !json.recipes) {
      console.error("Spoonacular error:", json);
      return [];
    }

    return json.recipes.map((r: any) => ({
      id: r.id,
      title: r.title || "Untitled Recipe",
      image: r.image || r.imageUrls?.[0],
      readyInMinutes: r.readyInMinutes || 0,
      servings: r.servings || 1,
      sourceUrl: r.sourceUrl || r.spoonacularSourceUrl,
      nutrition: r.nutrition || undefined,
    }));
  } catch (err) {
    console.error("Error fetching Spoonacular data:", err);
    return [];
  }
};
