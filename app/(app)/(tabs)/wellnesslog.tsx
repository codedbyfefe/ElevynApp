import { useWellness } from "@/src/context/WellnessContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "styles/wellnessstyles";

const WellnessLog = () => {
  const [sleep, setSleep] = useState("");
  const [stress, setStress] = useState("");
  const [activity, setActivity] = useState("");
  const [nutrition, setNutrition] = useState("");

  const router = useRouter();
  const { updateOverview } = useWellness();

  const handleSaveLog = () => {
    const data = {
      avgSleep: parseFloat(sleep) || 0,
      avgStress: parseFloat(stress) || 0,
      totalActivity: parseFloat(activity) || 0,
      latestNutrition: nutrition || "",
    };

    updateOverview(data);

    alert("Wellness log saved!");

    setSleep("");
    setStress("");
    setActivity("");
    setNutrition("");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <Text style={styles.header}>🌱 Daily Wellness Log</Text>

        {/* Sleep & Stress Row */}
        <View style={styles.row}>
          <View style={styles.inputCard}>
            <Text style={styles.label}>😴 Sleep Hours</Text>
            <TextInput
              style={styles.input}
              placeholder="7.5"
              keyboardType="numeric"
              value={sleep}
              onChangeText={setSleep}
            />
          </View>

          <View style={styles.inputCard}>
            <Text style={styles.label}>😰 Stress Level</Text>
            <TextInput
              style={styles.input}
              placeholder="5"
              keyboardType="numeric"
              value={stress}
              onChangeText={setStress}
            />
          </View>
        </View>

        {/* Activity & Nutrition Section */}
        <View style={styles.inputCard}>
          <Text style={styles.label}>🏃 Activity (minutes)</Text>
          <TextInput
            style={styles.input}
            placeholder="45"
            keyboardType="numeric"
            value={activity}
            onChangeText={setActivity}
          />

          <Text style={styles.label}>🥗 Nutrition Notes</Text>
          <TextInput
            style={[styles.input, { height: 80, textAlignVertical: "top" }]}
            placeholder="Balanced meals, skipped breakfast..."
            multiline
            value={nutrition}
            onChangeText={setNutrition}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSaveLog}>
            <Text style={styles.saveButtonText}>Save Log</Text>
          </TouchableOpacity>
        </View>

        {/* Resources Section */}
        <Text style={styles.sectionTitle}>📚 Wellness Resources</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <TouchableOpacity
            style={styles.resourceTile}
            onPress={() => router.push("/wellness/meditation")}
          >
            <Text style={styles.resourceTitle}>🧘 Meditation</Text>
            <Text style={styles.resourceText}>
              Short sessions to reduce stress.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resourceTile}
            onPress={() => router.push("/wellness/nutrition")}
          >
            <Text style={styles.resourceTitle}>🥑 Nutrition</Text>
            <Text style={styles.resourceText}>
              Fuel your body for peak performance.
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default WellnessLog;
