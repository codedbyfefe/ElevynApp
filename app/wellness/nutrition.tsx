import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "styles/nutritionstyles";

type Nutrient = { name: string; amount: number };

type Recipe = {
  image?: string;
  title: string;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  nutrition?: { nutrients?: Nutrient[] };
};

const MOCK_RECIPES: Recipe[] = [
  {
    title: "High Protein Bowl",
    readyInMinutes: 40,
    servings: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqhVqFsUHEjOTLEOJSwFeT_q7CnI912J97A&s",
    sourceUrl: "https://www.delish.com/cooking/recipe-ideas/a60344796/easy-peanut-chicken-protein-bowls-recipe/",
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 670 },
        { name: "Protein", amount: 42 },
        { name: "Carbohydrates", amount: 55 },
        { name: "Fat", amount: 30 },
      ],
    },
  },
  {
    title: "Quinoa Veggie Salad",
    readyInMinutes: 40,
    servings: 8,
    image:
      "https://beyondfrosting.com/wp-content/uploads/2022/04/Cold-Qouina-Vegetable-Salad-8213-2.jpg",
    sourceUrl: "https://cookieandkate.com/best-quinoa-salad-recipe/#tasty-recipes-25771-jump-target",
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 205 },
        { name: "Protein", amount: 6.1 },
        { name: "Carbohydrates", amount: 25.9 },
        { name: "Fat", amount: 9.4 },
      ],
    },
  },
  {
    title: "Avocado Toast with Eggs",
    readyInMinutes: 10,
    servings: 1,
    image:
      "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?auto=format&fit=crop&w=800&q=60",
    sourceUrl: "https://feelgoodfoodie.net/recipe/avocado-toast-with-egg-3-ways/",
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 583 },
        { name: "Protein", amount: 21 },
        { name: "Carbohydrates", amount: 36 },
        { name: "Fat", amount: 41 },
      ],
    },
  },
  {
    title: "Berry Yogurt Parfait",
    readyInMinutes: 5,
    servings: 4,
    image:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2014/4/11/1/BW2D09_Yogurt-Berry-Parfait_s4x3.jpg",
    sourceUrl: "https://www.foodnetwork.com/recipes/tyler-florence/yogurt-berry-parfait-recipe-1915894",
    nutrition: {
      nutrients: [
        { name: "Calories", amount: 313 },
        { name: "Protein", amount: 14 },
        { name: "Carbohydrates", amount: 38 },
        { name: "Fat", amount: 12 },
      ],
    },
  },
];

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 60) / 2; // 2 columns, with spacing

export default function NutritionScreen() {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    setRecipes(MOCK_RECIPES);
    setLoading(false);
  }, []);

  const renderNutrient = (emoji: string, value: number, label: string) => (
    <View style={styles.nutrientBox}>
      <Text style={styles.nutrientText}>
        {emoji} {value}
      </Text>
      <Text style={styles.nutrientLabel}>{label}</Text>
    </View>
  );

  const renderItem = ({ item }: { item: Recipe }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.thumbnail} />
      ) : (
        <View style={[styles.thumbnail, { backgroundColor: "#ccc" }]} />
      )}

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.info}>
        ⏱ {item.readyInMinutes ?? "-"} mins • 🍽 {item.servings ?? "-"} ser.
      </Text>

      {item.nutrition?.nutrients && (
        <View style={styles.nutritionRow}>
          {renderNutrient(
            "🔥",
            Math.round(
              item.nutrition.nutrients.find((n) => n.name === "Calories")?.amount ?? 0
            ),
            "Cal"
          )}
          {renderNutrient(
            "💪",
            Math.round(
              item.nutrition.nutrients.find((n) => n.name === "Protein")?.amount ?? 0
            ),
            "Protein"
          )}
          {renderNutrient(
            "🍞",
            Math.round(
              item.nutrition.nutrients.find((n) => n.name === "Carbohydrates")?.amount ?? 0
            ),
            "Carbs"
          )}
          {renderNutrient(
            "🥑",
            Math.round(
              item.nutrition.nutrients.find((n) => n.name === "Fat")?.amount ?? 0
            ),
            "Fat"
          )}
        </View>
      )}

      {item.sourceUrl && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => item.sourceUrl && Linking.openURL(item.sourceUrl)}
        >
          <Text style={styles.buttonText}>View Recipe</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -20],
    extrapolate: "clamp",
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.95],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.headerWrapper,
          { transform: [{ translateY: headerTranslate }, { scale: headerScale }] },
        ]}
      >
        <Text style={styles.header}>🥗 Nutrition & Meal Suggestions</Text>
      </Animated.View>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(item, idx) => item.title + idx}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        />
      )}
    </View>
  );
}
