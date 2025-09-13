import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  eventBox: {
    marginTop: 20,
    backgroundColor: "#1D2D44",
    padding: 15,
    borderRadius: 10,
  },
  eventTitle: {
    color: "#A6E1FA",
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  eventText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 4,
  },
  noEvent: {
    marginTop: 20,
    color: "#A7A9AB",
    fontSize: 14,
    fontStyle: "italic",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#A6E1FA",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  addButtonText: {
    color: "#111315",
    fontWeight: "700",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(27, 88, 138, 0.6)",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#24416bff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#A6E1FA",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#111315",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#A7A9AB",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
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
