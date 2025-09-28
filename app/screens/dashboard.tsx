import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import styles from "styles/dashboardstyles";

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
    </View>
  );
}

