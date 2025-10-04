import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "styles/dashboardstyles";
import { VictoryChart, VictoryLine, VictoryPie } from "victory-native";

const Dashboard = () => {
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

        {/* Top Row - Wellness + Academic Performance */}
        <View style={styles.row}>
          {/* Wellness */}
          <View style={[styles.card, styles.halfCard]}>
            <Text style={styles.cardTitle}>Wellness Score</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <VictoryPie
                data={[
                  { x: "Energy", y: wellnessScore },
                  { x: "Remaining", y: 100 - wellnessScore },
                ]}
                colorScale={["#4CAF50", "#333"]}
                innerRadius={60}
                padAngle={3}
                labels={() => null}
                width={160}
                height={160}
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

          {/* Academic */}
          <View style={[styles.card, styles.halfCard]}>
            <Text style={styles.cardTitle}>Academic Tasks</Text>
            <Text style={styles.valueText}>
              {academicTasks.done}/{academicTasks.total} completed
            </Text>
            <VictoryChart width={180} height={140}>
              <VictoryLine
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 4 },
                  { x: 3, y: 5 },
                  { x: 4, y: 7 },
                ]}
                style={{
                  data: { stroke: "#2196F3", strokeWidth: 3 },
                }}
              />
            </VictoryChart>
          </View>
        </View>

        {/* Athletic Events Section */}
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

        {/* Upcoming Events / Tasks */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📅 Upcoming</Text>
          <View style={styles.upcomingItem}>
            <Text style={styles.upcomingTitle}>Training Session</Text>
            <Text style={styles.upcomingTime}>Tomorrow • 08:00</Text>
          </View>
          <View style={styles.upcomingItem}>
            <Text style={styles.upcomingTitle}>Assignment Due</Text>
            <Text style={styles.upcomingTime}>In 3 days</Text>
          </View>
          <View style={styles.upcomingItem}>
            <Text style={styles.upcomingTitle}>Wellness Check-in</Text>
            <Text style={styles.upcomingTime}>Friday • 18:00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
