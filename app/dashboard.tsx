import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/dashboardstyles";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Welcome Back, Athlete 👋</Text>

      {/* Quick Stats */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Training</Text>
          <Text style={styles.cardValue}>12 hrs</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Academics</Text>
          <Text style={styles.cardValue}>6 tasks</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wellness</Text>
          <Text style={styles.cardValue}>Good</Text>
        </View>
      </View>

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
        <TouchableOpacity onPress={() => router.push("../SvgTest")}>
          <Text style={styles.navText}>🏀 Performance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Text style={styles.navText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

