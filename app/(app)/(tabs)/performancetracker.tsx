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
import styles from "styles/perfromancetrackerstyles";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

const { width } = Dimensions.get("window");

// Type definitions
type GameStat = {
  id: number;
  points: number;
  rebounds: number;
  assists: number;
};

type Workout = {
  id: number;
  name: string;
  duration: number;
  load: number;
};

export default function PerformanceTracker() {
  const [gameStats, setGameStats] = useState<GameStat[]>([
    { id: 1, points: 20, rebounds: 6, assists: 5 },
    { id: 2, points: 15, rebounds: 4, assists: 3 },
  ]);

  const [workouts, setWorkouts] = useState<Workout[]>([
    { id: 1, name: "Leg Day", duration: 60, load: 250 },
    { id: 2, name: "Conditioning Run", duration: 45, load: 200 },
  ]);

  // Inputs
  const [newWorkout, setNewWorkout] = useState("");
  const [duration, setDuration] = useState("");

  const [newGamePoints, setNewGamePoints] = useState("");
  const [newGameRebounds, setNewGameRebounds] = useState("");
  const [newGameAssists, setNewGameAssists] = useState("");

  // Add workout
  const handleAddWorkout = () => {
    if (!newWorkout || !duration) return;
    const load = Math.floor(parseInt(duration, 10) * 4.5);
    setWorkouts((prev) => [
      { id: Date.now(), name: newWorkout, duration: parseInt(duration, 10), load },
      ...prev,
    ]);
    setNewWorkout("");
    setDuration("");
  };

  // Add game
  const handleAddGame = () => {
    if (!newGamePoints || !newGameRebounds || !newGameAssists) return;
    const newGame: GameStat = {
      id: gameStats.length + 1,
      points: parseInt(newGamePoints, 10),
      rebounds: parseInt(newGameRebounds, 10),
      assists: parseInt(newGameAssists, 10),
    };
    setGameStats((prev) => [newGame, ...prev]);
    setNewGamePoints("");
    setNewGameRebounds("");
    setNewGameAssists("");
  };

  const totalLoad = workouts.reduce((sum, w) => sum + w.load, 0);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111315" }} contentContainerStyle={styles.container}>
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

      {/* TRAINING / WORKOUTS */}
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
  );
}
