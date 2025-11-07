import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  dayPickerContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
  },
  pickerLabel: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "500",
  },
  picker: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#333",
    borderRadius: 8,
  },
  addTaskCard: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
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
    backgroundColor: "#1f1f1f",
    borderRadius: 12,
    padding: 10,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
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
    borderColor: "#fff",
    marginRight: 10,
  },
  checkboxDone: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  taskText: {
    color: "#fff",
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default styles;
