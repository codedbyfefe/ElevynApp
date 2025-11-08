import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { usePerformance } from "src/context/PerformanceContext";
import styles from "styles/perfromancetrackerstyles";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

const { width } = Dimensions.get("window");

export default function PerformanceTracker() {
  const { gameStats, workouts, addGame, addWorkout } = usePerformance();

  const [newWorkout, setNewWorkout] = useState("");
  const [duration, setDuration] = useState("");

  const [newGamePoints, setNewGamePoints] = useState("");
  const [newGameRebounds, setNewGameRebounds] = useState("");
  const [newGameAssists, setNewGameAssists] = useState("");

  const handleAddWorkout = () => {
    if (!newWorkout || !duration) return;
    addWorkout({ name: newWorkout, duration: parseInt(duration, 10) });
    setNewWorkout("");
    setDuration("");
  };

  const handleAddGame = () => {
    if (!newGamePoints || !newGameRebounds || !newGameAssists) return;
    addGame({
      points: parseInt(newGamePoints, 10),
      rebounds: parseInt(newGameRebounds, 10),
      assists: parseInt(newGameAssists, 10),
    });
    setNewGamePoints("");
    setNewGameRebounds("");
    setNewGameAssists("");
  };

  const totalLoad = workouts.reduce((sum, w) => sum + w.load, 0);

  return (
    <FlatList
      data={workouts}
      keyExtractor={(item) => item.id.toString()}
      style={{ flex: 1, backgroundColor: "#111315" }}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <>
          {/* HEADER */}
          <Text style={styles.header}>🏀 Performance Tracker</Text>

          {/* GAME STATS */}
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>📊 Game Stats</Text>

            <VictoryChart width={width * 0.9} height={250} domainPadding={20}>
              <VictoryAxis
                tickValues={gameStats.map((_, idx) => idx + 1)}
                tickFormat={gameStats.map((g) => `G${g.id}`)}
                style={{ tickLabels: { fill: "#fff" } }}
              />
              <VictoryAxis dependentAxis style={{ tickLabels: { fill: "#fff" } }} />
              <VictoryBar
                data={gameStats.map((g, idx) => ({ x: idx + 1, y: g.points }))}
                style={{ data: { fill: "#00f" } }}
              />
            </VictoryChart>

            {gameStats.map((g) => (
              <Text key={g.id} style={styles.summaryText}>
                Game {g.id}: {g.points} pts, {g.rebounds} reb, {g.assists} ast
              </Text>
            ))}
          </View>

          {/* ADD GAME */}
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>➕ Add Game</Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="Points"
                keyboardType="numeric"
                style={styles.inputSmall}
                value={newGamePoints}
                onChangeText={setNewGamePoints}
              />
              <TextInput
                placeholder="Rebounds"
                keyboardType="numeric"
                style={styles.inputSmall}
                value={newGameRebounds}
                onChangeText={setNewGameRebounds}
              />
              <TextInput
                placeholder="Assists"
                keyboardType="numeric"
                style={styles.inputSmall}
                value={newGameAssists}
                onChangeText={setNewGameAssists}
              />
            </View>
            <TouchableOpacity style={styles.buttonSmall} onPress={handleAddGame}>
              <Text style={styles.buttonTextSmall}>Add Game</Text>
            </TouchableOpacity>
          </View>

          {/* TRAINING & WORKOUT INPUTS */}
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
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.workoutItem}>
          <Text style={styles.workoutName}>{item.name}</Text>
          <Text style={styles.workoutMeta}>
            {item.duration} min | Load {item.load}
          </Text>
        </View>
      )}
      ListEmptyComponent={
        <Text style={{ color: "#888", textAlign: "center", marginTop: 10 }}>
          No workouts yet — add your first one above.
        </Text>
      }
    />
  );
}
