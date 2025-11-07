import { fetchMealSuggestions } from "app/services/spoonacularService";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  View,
} from "react-native";

type Nutrient = { name: string; amount: number };

type Recipe = {
  image?: string;
  title: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  nutrition?: { nutrients?: Nutrient[] };
};

//fallback content (never let screen be empty)
const MOCK_RECIPES: Recipe[] = [
  {
    title: "High Protein Bowl (Sample Recipe)",
    readyInMinutes: 18,
    servings: 1,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    sourceUrl: "https://example.com/mock",
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 520 },
        { name: "Protein", amount: 42 },
        { name: "Carbohydrates", amount: 55 },
        { name: "Fat", amount: 16 },
      ],
    },
  },
];

export default function NutritionScreen() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const autoLoadMeals = async () => {
      try {
        const data = await fetchMealSuggestions(3);

        if (!data || data.length === 0) {
          Alert.alert("No recipes found", "Using fallback recipes.");
          setRecipes(MOCK_RECIPES);
          return;
        }

        const formatted = data.map((r: any) => ({
          title: r.title || "Untitled",
          image: r.image || r.imageUrls?.[0],
          readyInMinutes: r.readyInMinutes,
          servings: r.servings,
          sourceUrl: r.sourceUrl || r.spoonacularSourceUrl,
          nutrition: r.nutrition ?? undefined,
        }));

        setRecipes(formatted);
      } catch (err: unknown) {
        console.error("Error fetching recipes:", err);
        Alert.alert("Error", "Could not load meal suggestions — showing sample recipes.");
        setRecipes(MOCK_RECIPES);
      } finally {
        setLoading(false);
      }
    };

    autoLoadMeals();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 10 }}>
        🥗 Nutrition & Meal Suggestions
      </Text>

      <Text style={{ opacity: 0.7, marginBottom: 10 }}>
        Automatically recommended based on performance nutrition goals.
      </Text>

      {loading && <ActivityIndicator size="large" style={{ marginVertical: 20 }} />}

      {recipes.map((recipe, idx) => (
        <View
          key={idx}
          style={{
            padding: 16,
            marginVertical: 15,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#fafafa",
          }}
        >
          {recipe.image && (
            <Image
              source={{ uri: recipe.image }}
              style={{ height: 180, borderRadius: 8, marginBottom: 12 }}
              resizeMode="cover"
            />
          )}

          <Text style={{ fontSize: 20, fontWeight: "700" }}>{recipe.title}</Text>
          <Text>⏱ {recipe.readyInMinutes} mins • 🍽 {recipe.servings} servings</Text>

          {/* ✅ Nutrition Section */}
          {recipe.nutrition?.nutrients && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: "600" }}>Nutrition (per serving):</Text>

              <Text>🔥 {Math.round(recipe.nutrition.nutrients.find((n) => n.name === "Calories")?.amount || 0)} kcal</Text>
              <Text>💪 Protein: {Math.round(recipe.nutrition.nutrients.find((n) => n.name === "Protein")?.amount || 0)} g</Text>
              <Text>🍞 Carbs: {Math.round(recipe.nutrition.nutrients.find((n) => n.name === "Carbohydrates")?.amount || 0)} g</Text>
              <Text>🥑 Fat: {Math.round(recipe.nutrition.nutrients.find((n) => n.name === "Fat")?.amount || 0)} g</Text>
            </View>
          )}

          {recipe.sourceUrl && (
            <Text
              style={{
                marginTop: 10,
                color: "#2b7a4b",
                fontWeight: "600",
              }}
              onPress={() => Linking.openURL(recipe.sourceUrl!)}
            >
              👉 View Full Recipe
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
