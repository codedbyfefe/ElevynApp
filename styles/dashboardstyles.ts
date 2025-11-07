import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardSmall: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    marginLeft: 6,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  value: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F172A",
  },
  subText: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
  wellnessGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  wellnessItem: {
    width: "48%",
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  metricLabel: {
    fontSize: 13,
    color: "#475569",
  },
  metricValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
  },
  balanceCard: {
    backgroundColor: "#EEF2FF",
  },
  insight: {
    fontSize: 14,
    color: "#1E293B",
    marginTop: 4,
  },
  upcomingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  upcomingTitle: {
    fontSize: 14,
    color: "#0F172A",
    fontWeight: "500",
  },
  upcomingTime: {
    fontSize: 13,
    color: "#64748B",
  },
});

export default styles;
