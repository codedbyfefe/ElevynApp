import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#222",
  },
  filterButtonActive: {
    backgroundColor: "#4CAF50",
  },
  filterText: {
    color: "#aaa",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  progressFill: {
    height: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    borderRadius: 10,
    padding: 16,
    borderWidth: 1.5,
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subject: {
    color: "#bbb",
    marginTop: 4,
  },
  dueDate: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 20,
    width: "100%",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#2A2A2A",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyText: {
    color: "#999",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
  },
});
