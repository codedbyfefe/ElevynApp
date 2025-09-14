import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  eventBox: {
    marginTop: 12,
    backgroundColor: "#1D2D44",
    padding: 12,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A6E1FA",
    marginBottom: 6,
  },
  eventRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  eventText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  eventActions: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    color: "#A6E1FA",
    fontSize: 14,
    fontWeight: "500",
  },
  deleteButton: {
    color: "#FF6B6B",
    fontSize: 14,
    fontWeight: "500",
  },
  noEvent: {
    color: "#A7A9AB",
    fontStyle: "italic",
    marginTop: 6,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#4E9F3D",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 16,
  },
  modalBox: {
    backgroundColor: "#1D2D44",
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    flex: 1,
    marginLeft: 6,
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#1D2D44",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navText: {
    color: "#A6E1FA",
    fontSize: 16,
  },
});

export default styles;
