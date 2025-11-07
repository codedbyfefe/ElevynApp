import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
    backgroundColor: "#121212",
  },

  // Headers & Titles
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A6E1FA",
    marginTop: 15,
    marginBottom: 10,
  },
  subTitle: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },

  // Summary Box
  summaryBox: {
    marginTop: 20,
    backgroundColor: "#1D2D44",
    padding: 15,
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: 10,
  },
  summaryText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 5,
  },

  // Section Box
  sectionBox: {
    backgroundColor: "#1C1F22",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Inputs & Buttons
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#222",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  inputSmall: {
    fontSize: 12,
    padding: 5,
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonSmall: {
    padding: 6,
    backgroundColor: "#007AFF",
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonTextSmall: {
    fontSize: 12,
    color: "#fff",
  },

  // Workout List
  workoutItem: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  workoutName: {
    color: "#fff",
    fontWeight: "600",
  },
  workoutMeta: {
    color: "#aaa",
    fontSize: 13,
  },

  // Chart
  chartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  chartBox: {
    backgroundColor: "#1C1F22",
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  chartLabel: {
    color: "#fff",
    fontSize: 14,
    marginBottom: -10,
  },

  // Misc
  loadTitle: {
    color: "#FFD700",
    fontSize: 16,
    marginVertical: 10,
  },
});
