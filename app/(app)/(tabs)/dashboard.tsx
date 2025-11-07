import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "styles/dashboardstyles";

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

        {/* Wellness */}
        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Wellness Score</Text>
          <Text style={styles.valueText}>{wellnessScore}%</Text>
        </View>

        {/* Academic Tasks */}
        <View style={[styles.card, styles.halfCard]}>
          <Text style={styles.cardTitle}>Academic Tasks</Text>
          <Text style={styles.valueText}>
            {academicTasks.done}/{academicTasks.total} completed
          </Text>
        </View>

        {/* Athletic Events */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Athletic Events</Text>
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
