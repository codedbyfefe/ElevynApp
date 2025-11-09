import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // match dashboard
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 20,
  },
  dayPickerContainer: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: "#FFFFFF", // light card style
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  pickerLabel: {
    fontWeight: "500",
    marginBottom: 5,
    color: "#334155",
  },
  picker: {
    width: "100%",
    backgroundColor: "#F1F5F9", // subtle card inside
    borderRadius: 8,
    color: "#0F172A", // text color for iOS and Android selected item
  },
  addTaskCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    backgroundColor: "#F1F5F9",
    color: "#0F172A",
    padding: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "#0E6BA8", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dayBox: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 8,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
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
    backgroundColor: "#4F46E5",
    borderColor: "#4F46E5",
  },
  taskText: {
    color: "#0F172A",
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },
});

export default styles;
