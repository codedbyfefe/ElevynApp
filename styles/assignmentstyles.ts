import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  progressFill: {
    height: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  card: {
    backgroundColor: "#1A1D21",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  subject: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  dueDate: {
    color: "#4CAF50",
    fontSize: 12,
    marginTop: 6,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#1A1D21",
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#333",
    borderRadius: 8,
  },
  cancelText: {
    color: "#aaa",
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* --- FILTER STYLES --- */
  filterContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#333",
    borderRadius: 6,
    marginRight: 8,
  },
  filterButtonActive: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 6,
    marginRight: 8,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#111",
    fontSize: 14,
    fontWeight: "600",
  },
});
