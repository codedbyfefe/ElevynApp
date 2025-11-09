import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA", // dashboard background
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1C2541", 
    marginBottom: 20,
    textAlign: "center",
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
    backgroundColor: "#E4E4E4", 
  },
  filterButtonActive: {
    backgroundColor: "#3A506B", 
  },
  filterText: {
    color: "#555",
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
    color: "#1C2541",
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#DDD",
    borderRadius: 5,
  },
  progressFill: {
    height: 10,
    backgroundColor: "#3A506B",
    borderRadius: 5,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d6d6d65a", 
    borderRadius: 12,
    padding: 16,
    borderWidth: 0,
    marginBottom: 12,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C2541",
  },
  subject: {
    color: "#333333ff",
    marginTop: 4,
  },
  dueDate: {
    color: "#232323ff",
    fontSize: 13,
    marginTop: 2,
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E6BA8",
    borderRadius: 12,
    padding: 14,
    marginTop: 15,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
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
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    width: "100%",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C2541",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F1F1F1",
    color: "#1C2541",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "#DDDDDD",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#3A506B",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelText: {
    color: "#555",
    fontWeight: "600",
  },
  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  emptyText: {
    color: "#888",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
  },
});
