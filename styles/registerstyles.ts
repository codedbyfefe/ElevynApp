import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // dashboard background
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B", // dashboard header color
    textAlign: "center",
    marginBottom: 30,
  },
  inputCard: {
    backgroundColor: "#FFFFFF", // dashboard card color
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    backgroundColor: "#F1F5F9", 
    color: "#0F172A", 
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0E6BA8", 
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
loginText: {
  fontSize: 14,
  color: "#64748B",
},
loginLink: {
  fontSize: 14,
  color: "#0E6BA8",
  fontWeight: "600",
},


});

export default styles;
