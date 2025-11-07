import { SPOONACULAR_API_KEY } from "app/config/env";

export interface SpoonRecipe {
  title: string;
  image?: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  nutrition?: {
    nutrients?: {
      name: string;
      amount: number;
    }[];
  };
}

export const fetchMealSuggestions = async (count = 3): Promise<SpoonRecipe[]> => {
  if (!SPOONACULAR_API_KEY) {
    throw new Error("Missing Spoonacular API key in env config.");
  }

  const url = `https://api.spoonacular.com/recipes/random?number=${count}&tags=high-protein,healthy&includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`;

  const resp = await fetch(url);
  const json = await resp.json();

  if (!resp.ok || !json.recipes) {
    throw new Error("Unable to fetch meal suggestions.");
  }

  return json.recipes;
};
