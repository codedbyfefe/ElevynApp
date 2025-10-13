import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "styles/performancetrackerstyles";
import { VictoryBar, VictoryChart, VictoryLine } from "victory-native";

const { width } = Dimensions.get("window");

const gameStats = [
  { game: 1, points: 18, rebounds: 5, assists: 4, fg: 45 },
  { game: 2, points: 22, rebounds: 7, assists: 6, fg: 50 },
  { game: 3, points: 15, rebounds: 4, assists: 5, fg: 38 },
];

export default function PerformanceTracker() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Leg Day", duration: 60, load: 250 },
    { id: 2, name: "Conditioning Run", duration: 45, load: 200 },
  ]);
  const [newWorkout, setNewWorkout] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddWorkout = () => {
    if (!newWorkout || !duration) return;

    const load = Math.floor(parseInt(duration) * 4.5); // simple load formula
    const newEntry = {
      id: Date.now(),
      name: newWorkout,
      duration: parseInt(duration),
      load,
    };
    setWorkouts((prev) => [newEntry, ...prev]);
    setNewWorkout("");
    setDuration("");
  };

  const totalLoad = workouts.reduce((sum, w) => sum + w.load, 0);

  return (
    <View style={{ flex: 1, backgroundColor: "#111315" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>🏀 Performance Tracker</Text>

        {/* GAME PERFORMANCE SECTION */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>📊 Game Performance</Text>

          {/* Charts side by side */}
          <View style={styles.chartRow}>
            <View style={styles.chartBox}>
              <Text style={styles.chartLabel}>Points</Text>
              <VictoryChart
                width={width * 0.4}
                height={180}
                domainPadding={15}
              >
                <VictoryBar
                  data={gameStats}
                  x="game"
                  y="points"
                  style={{ data: { fill: "#A6E1FA" } }}
                />
              </VictoryChart>
            </View>

            <View style={styles.chartBox}>
              <Text style={styles.chartLabel}>FG%</Text>
              <VictoryChart
                width={width * 0.4}
                height={180}
                domainPadding={15}
              >
                <VictoryLine
                  data={gameStats}
                  x="game"
                  y="fg"
                  style={{
                    data: { stroke: "#FFD700", strokeWidth: 3 },
                  }}
                />
              </VictoryChart>
            </View>
          </View>

          {/* Summary */}
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>Recent Games</Text>
            {gameStats.map((g) => (
              <Text key={g.game} style={styles.summaryText}>
                Game {g.game}: {g.points} pts, {g.rebounds} reb, {g.assists} ast
                {"  "} (FG% {g.fg})
              </Text>
            ))}
          </View>
        </View>

        {/* WORKOUT SECTION */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>🏋️ Training & Workouts</Text>

          <View style={styles.inputRow}>
            <TextInput
              placeholder="Workout name"
              placeholderTextColor="#888"
              style={styles.input}
              value={newWorkout}
              onChangeText={setNewWorkout}
            />
            <TextInput
              placeholder="Duration (min)"
              placeholderTextColor="#888"
              keyboardType="numeric"
              style={[styles.input, { width: 100 }]}
              value={duration}
              onChangeText={setDuration}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAddWorkout}>
            <Text style={styles.buttonText}>Start / Log Workout</Text>
          </TouchableOpacity>

          <Text style={styles.loadTitle}>Total Training Load: {totalLoad}</Text>

          <FlatList
            data={workouts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.workoutItem}>
                <Text style={styles.workoutName}>{item.name}</Text>
                <Text style={styles.workoutMeta}>
                  {item.duration} min | Load {item.load}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
