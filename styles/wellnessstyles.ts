import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // same as dashboard
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1E293B", // same as dashboard header
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
    color: "#475569", // matches metricLabel
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0", // subtle border like dashboard cards
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF", // card style
    marginBottom: 15,
    color: "#0F172A",
  },
  saveButton: {
    backgroundColor: "#0E6BA8", 
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
    color: "#1E293B", 
  },
  resourceCard: {
    backgroundColor: "#FFFFFF", // card style
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#334155", // dashboard cardTitle color
  },
  resourceText: {
    fontSize: 14,
    color: "#64748B", // dashboard subText color
  },
});
