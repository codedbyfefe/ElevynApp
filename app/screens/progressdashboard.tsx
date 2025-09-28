import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "styles/progressdashboardstyles";
import { VictoryChart, VictoryLine, VictoryPie } from "victory-native";

const ProgressDashboard = () => {
  const router = useRouter();

  // Example data
  const academicTasks = { done: 5, total: 7 };
  const athleticEvents = { trainings: 3, games: 1 };
  const wellnessScore = 72;

  const balanceMessage =
    athleticEvents.trainings + athleticEvents.games >
    (academicTasks.done / academicTasks.total) * 7
      ? "You’ve logged more hours on sport than study this week — try adjusting."
      : "Great balance between academics and athletics this week!";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>📊 Progress Dashboard</Text>

        {/* Wellness Score Circular Graph */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wellness Score</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <VictoryPie
              data={[
                { x: "Energy", y: wellnessScore },
                { x: "Remaining", y: 100 - wellnessScore },
              ]}
              colorScale={["#4CAF50", "#333"]}
              innerRadius={70}
              padAngle={3}
              labels={() => null}
              width={250}
              height={250}
            />
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.valueText}>{wellnessScore}%</Text>
            </View>
          </View>
        </View>

        {/* Academic Performance */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Academic Tasks</Text>
          <Text style={styles.valueText}>
            {academicTasks.done}/{academicTasks.total} completed this week
          </Text>
        </View>

        {/* Athletic Events */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Athletic Events</Text>
          <VictoryChart width={350} height={250}>
            <VictoryLine
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
              ]}
              style={{
                data: { stroke: "#1D2D44", strokeWidth: 3 },
              }}
            />
          </VictoryChart>
          <Text style={styles.valueText}>
            {athleticEvents.trainings} trainings, {athleticEvents.games} games
          </Text>
        </View>

        {/* Balance Insight */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Balance Insight</Text>
          <Text style={styles.insightText}>{balanceMessage}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProgressDashboard;
