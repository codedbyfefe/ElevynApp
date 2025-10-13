import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100, 
  },
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
  sectionBox: {
  backgroundColor: "#1C1F22",
  borderRadius: 12,
  padding: 15,
  marginBottom: 20,
  shadowColor: "#000",
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
subTitle: {
  color: "#ccc",
  fontSize: 16,
  marginTop: 10,
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
  backgroundColor: "#222",
  color: "#fff",
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 8,
  marginRight: 10,
},
button: {
  backgroundColor: "#4CAF50",
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: "center",
  marginBottom: 10,
},
buttonText: {
  color: "#fff",
  fontWeight: "600",
},
loadTitle: {
  color: "#FFD700",
  fontSize: 16,
  marginVertical: 10,
},
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
chartLabel: {
  color: "#fff",
  fontSize: 14,
  marginBottom: -10,
},

});
