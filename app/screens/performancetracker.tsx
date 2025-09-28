import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "styles/performancetrackerstyles";
import { VictoryBar, VictoryChart, VictoryLine } from "victory-native";

const gameStats = [
  { game: 1, points: 18, rebounds: 5, assists: 4, fg: 45 },
  { game: 2, points: 22, rebounds: 7, assists: 6, fg: 50 },
  { game: 3, points: 15, rebounds: 4, assists: 5, fg: 38 },
];

export default function PerformanceTracker() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#111315" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>🏀 Performance Tracker</Text>

        {/* Points Over Games */}
        <Text style={styles.sectionTitle}>Points Over Time</Text>
        <VictoryChart>
          <VictoryBar
            data={gameStats}
            x="game"
            y="points"
            style={{ data: { fill: "#A6E1FA" } }}
          />
        </VictoryChart>

        {/* Field Goal % Line Graph */}
        <Text style={styles.sectionTitle}>Field Goal %</Text>
        <VictoryChart>
          <VictoryLine
            data={gameStats}
            x="game"
            y="fg"
            style={{
              data: { stroke: "#FFD700", strokeWidth: 3 },
            }}
          />
        </VictoryChart>

        {/* Summary Box */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Summary</Text>
          <Text style={styles.summaryText}>Game 1: 18 pts, 5 reb, 4 ast (FG% 45)</Text>
          <Text style={styles.summaryText}>Game 2: 22 pts, 7 reb, 6 ast (FG% 50)</Text>
          <Text style={styles.summaryText}>Game 3: 15 pts, 4 reb, 5 ast (FG% 38)</Text>
        </View>
      </ScrollView>
    </View>
  );
}
