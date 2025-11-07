import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function WellnessHome() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>
        🌿 Wellness Hub
      </Text>

      <Link href="./(app)/wellness/nutrition" asChild>
        <TouchableOpacity style={{ padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
          <Text>🥗 Nutrition</Text>
        </TouchableOpacity>
      </Link>

      <Link href="./(app)/wellness/meditation" asChild>
        <TouchableOpacity style={{ padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
          <Text>🧘 Guided Meditation</Text>
        </TouchableOpacity>
      </Link>

      <Link href="./(app)/wellness/journal" asChild>
        <TouchableOpacity style={{ padding: 15, borderWidth: 1, borderRadius: 10 }}>
          <Text>✍️ Journal</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
