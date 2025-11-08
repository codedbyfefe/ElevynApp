import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // match dashboard
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B", // match dashboard header color
    textAlign: "center",
    marginBottom: 20,
  },
  dayPickerContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  pickerLabel: {
    color: "#475569",
    marginBottom: 5,
    fontWeight: "500",
  },
  picker: {
    width: "100%",
    color: "#0F172A",
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    padding: 8,
  },
  addTaskCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    backgroundColor: "#F1F5F9",
    color: "#0F172A",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#4F46E5", // dashboard accent color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  dayBox: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155", // dashboard card title color
    marginBottom: 8,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#0F172A",
    marginRight: 10,
  },
  checkboxDone: {
    backgroundColor: "#4F46E5", // match dashboard accent
    borderColor: "#4F46E5",
  },
  taskText: {
    color: "#0F172A",
    fontSize: 14,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: "#94A3B8", // muted color for done tasks
    fontSize: 14,
  },
});

export default styles; 
