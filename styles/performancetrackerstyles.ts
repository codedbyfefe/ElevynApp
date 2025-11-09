import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
    backgroundColor: "#F8F9FA", // same as dashboard background
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C2541", 
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C2541",
    marginTop: 15,
    marginBottom: 10,
  },
  sectionBox: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2, // slight shadow like dashboard
  },
  summaryText: {
    fontSize: 14,
    color: "#5C5C5C", 
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#1C2541",
    marginRight: 10,
  },
  inputSmall: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
    color: "#1C2541",
    marginRight: 5,
  },
  button: {
    backgroundColor: "#0E6BA8", 
    paddingVertical: 14,
    borderRadius: 10,
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
    paddingVertical: 10,
    borderRadius: 10,
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
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
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
    marginTop: 3,
  },
  chartLabel: {
    color: "#1C2541",
    fontSize: 14,
    marginBottom: -10,
  },
});
