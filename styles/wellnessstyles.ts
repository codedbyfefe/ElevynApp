import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1C2541",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    color: "#3A506B",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#3A506B",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
    color: "#1C2541",
  },
  resourceCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    color: "#3A506B",
  },
  resourceText: {
    fontSize: 14,
    color: "#5C5C5C",
  },
});
