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
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1D2D44",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
