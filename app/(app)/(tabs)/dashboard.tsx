import { Ionicons } from "@expo/vector-icons";
import { WellnessContext } from "app/context/WellnessContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import styles from "styles/dashboardstyles";

const Dashboard = () => {
  const router = useRouter();
  const { overview: wellnessOverview } = useContext(WellnessContext);

  const academicTasks = { done: 5, total: 7 };
  const athleticEvents = { trainings: 3, games: 1 };
  const academicProgress = academicTasks.done / academicTasks.total;
  const athleticProgress =
    (athleticEvents.trainings + athleticEvents.games) / 7;

  const balanceMessage =
    athleticEvents.trainings + athleticEvents.games >
    (academicTasks.done / academicTasks.total) * 7
      ? "⚠️ You’ve logged more hours on sport than study — consider rebalancing."
      : "✅ Great balance between academics and athletics this week!";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>📈 Dashboard</Text>

      {/* Summary cards */}
      <View style={styles.row}>
        <View style={styles.cardSmall}>
          <View style={styles.iconRow}>
            <Ionicons name="school-outline" size={22} color="#2563EB" />
            <Text style={styles.cardTitle}>Academics</Text>
          </View>
          <Text style={styles.value}>
            {academicTasks.done}/{academicTasks.total}
          </Text>
          <Progress.Bar
            progress={academicProgress}
            color="#2563EB"
            width={null}
            height={6}
            borderRadius={4}
            style={{ marginTop: 6 }}
          />
          <Text style={styles.subText}>Tasks Completed</Text>
        </View>

        <View style={styles.cardSmall}>
          <View style={styles.iconRow}>
            <Ionicons name="barbell-outline" size={22} color="#10B981" />
            <Text style={styles.cardTitle}>Athletics</Text>
          </View>
          <Text style={styles.value}>
            {athleticEvents.trainings + athleticEvents.games}
          </Text>
          <Progress.Bar
            progress={athleticProgress}
            color="#10B981"
            width={null}
            height={6}
            borderRadius={4}
            style={{ marginTop: 6 }}
          />
          <Text style={styles.subText}>Sessions This Week</Text>
        </View>
      </View>

      {/* Wellness Overview */}
      <View style={styles.card}>
        <View style={styles.iconRow}>
          <Ionicons name="heart-outline" size={22} color="#EC4899" />
          <Text style={styles.cardTitle}>Wellness Overview</Text>
        </View>
        <View style={styles.wellnessGrid}>
          <View style={styles.wellnessItem}>
            <Ionicons name="moon-outline" size={18} color="#6366F1" />
            <Text style={styles.metricLabel}>Sleep</Text>
            <Progress.Bar
              progress={Math.min(wellnessOverview.avgSleep / 8, 1)}
              color="#6366F1"
              width={100}
              height={5}
              style={{ marginVertical: 3 }}
            />
            <Text style={styles.metricValue}>{wellnessOverview.avgSleep} hrs</Text>
          </View>

          <View style={styles.wellnessItem}>
            <Ionicons name="happy-outline" size={18} color="#F59E0B" />
            <Text style={styles.metricLabel}>Stress</Text>
            <Progress.Bar
              progress={1 - wellnessOverview.avgStress / 10}
              color="#F59E0B"
              width={100}
              height={5}
              style={{ marginVertical: 3 }}
            />
            <Text style={styles.metricValue}>{wellnessOverview.avgStress}/10</Text>
          </View>

          <View style={styles.wellnessItem}>
            <Ionicons name="bicycle-outline" size={18} color="#22C55E" />
            <Text style={styles.metricLabel}>Activity</Text>
            <Progress.Bar
              progress={Math.min(wellnessOverview.totalActivity / 150, 1)}
              color="#22C55E"
              width={100}
              height={5}
              style={{ marginVertical: 3 }}
            />
            <Text style={styles.metricValue}>{wellnessOverview.totalActivity} min</Text>
          </View>

          <View style={styles.wellnessItem}>
            <Ionicons name="nutrition-outline" size={18} color="#EF4444" />
            <Text style={styles.metricLabel}>Nutrition</Text>
            <Text style={styles.metricValue}>
              {wellnessOverview.latestNutrition}
            </Text>
          </View>
        </View>
      </View>

      {/* Balance Insight */}
      <View style={[styles.card, styles.balanceCard]}>
        <View style={styles.iconRow}>
          <Ionicons name="scale-outline" size={22} color="#6366F1" />
          <Text style={styles.cardTitle}>Balance Insight</Text>
        </View>
        <Text style={styles.insight}>{balanceMessage}</Text>
      </View>

      {/* Upcoming Section */}
      <View style={styles.card}>
        <View style={styles.iconRow}>
          <Ionicons name="calendar-outline" size={22} color="#2563EB" />
          <Text style={styles.cardTitle}>Upcoming</Text>
        </View>
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
  );
};

export default Dashboard;
