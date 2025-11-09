import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
    backgroundColor: "#F8F9FA",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C2541",
    marginBottom: 25,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C2541",
    marginTop: 15,
    marginBottom: 12,
  },
  sectionBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    elevation: 3,
  },
  summaryText: {
    fontSize: 14,
    color: "#3A506B",
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F0F0F0",
    color: "#1C2541",
    marginRight: 10,
  },
  inputSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#F0F0F0",
    color: "#1C2541",
    marginRight: 5,
  },
  button: {
    backgroundColor: "#0E6BA8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonSmall: {
    backgroundColor: "#0E6BA8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonTextSmall: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  loadTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C2541",
    marginVertical: 10,
  },
  workoutItem: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3A506B",
  },
  workoutMeta: {
    fontSize: 14,
    color: "#5C5C5C",
    marginTop: 4,
  },
  chartLabel: {
    color: "#1C2541",
    fontSize: 14,
    marginBottom: -10,
  },
  victoryAxis: {
    tickLabels: { fill: "#1C2541", fontSize: 12, padding: 5 },
  },
});
