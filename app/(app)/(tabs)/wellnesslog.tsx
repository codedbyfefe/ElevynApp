import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "styles/wellnessstyles";

const WellnessLog = () => {
  const [sleep, setSleep] = useState("");
  const [stress, setStress] = useState("");
  const [activity, setActivity] = useState("");
  const [nutrition, setNutrition] = useState("");

  const handleSaveLog = () => {
    // For now, just console log- back end will be added later
    console.log({
      sleep,
      stress,
      activity,
      nutrition,
    });
    alert("✅ Wellness log saved!");
    setSleep("");
    setStress("");
    setActivity("");
    setNutrition("");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>🌱 Wellness Log</Text>

        {/* Input Fields */}
        <Text style={styles.label}>😴 Sleep Hours</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 7.5"
          keyboardType="numeric"
          value={sleep}
          onChangeText={setSleep}
        />

        <Text style={styles.label}>😰 Stress Level (1-10)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 5"
          keyboardType="numeric"
          value={stress}
          onChangeText={setStress}
        />

        <Text style={styles.label}>🏃 Activity (minutes)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 45"
          keyboardType="numeric"
          value={activity}
          onChangeText={setActivity}
        />

        <Text style={styles.label}>🥗 Nutrition Notes</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="e.g. Balanced meals, skipped breakfast..."
          multiline
          value={nutrition}
          onChangeText={setNutrition}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveLog}>
          <Text style={styles.saveButtonText}>Save Log</Text>
        </TouchableOpacity>

        {/* Wellness Resources */}
        <Text style={styles.sectionTitle}>📚 Wellness Resources</Text>

        <View style={styles.resourceCard}>
          <Text style={styles.resourceTitle}>🧘 Guided Meditation</Text>
          <Text style={styles.resourceText}>Short sessions to reduce stress and improve focus.</Text>
        </View>

        <View style={styles.resourceCard}>
          <Text style={styles.resourceTitle}>🥑 Nutrition Tips</Text>
          <Text style={styles.resourceText}>Learn how to fuel your body for peak performance.</Text>
        </View>

        <View style={styles.resourceCard}>
          <Text style={styles.resourceTitle}>🛌 Sleep Hygiene</Text>
          <Text style={styles.resourceText}>Improve recovery with better sleep habits.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default WellnessLog;
