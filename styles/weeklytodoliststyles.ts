import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
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
  dayBox: {
    backgroundColor: "#1D2D44",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#A6E1FA",
    marginBottom: 10,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#A6E1FA",
    borderRadius: 5,
    marginRight: 10,
  },
  checkboxDone: {
    backgroundColor: "#A6E1FA",
  },
  taskText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: "#777",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1D2D44",
  },
  navText: {
    color: "#A6E1FA",
    fontSize: 16,
  },
});
