import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { VictoryChart, VictoryLine, VictoryPie } from "victory-native";
import styles from "../styles/progressdashboardstyles";

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
          <Text style={styles.valueText}>{wellnessScore}%</Text>
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
          <VictoryChart>
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

      {/* Bottom Nav */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push("/dashboard")}>
          <Text style={styles.navText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/progressdashboard")}>
          <Text style={styles.navText}>📊 Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/calendar")}>
          <Text style={styles.navText}>📅 Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/performancetracker")}>
          <Text style={styles.navText}>🏀 Performance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Text style={styles.navText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressDashboard;
