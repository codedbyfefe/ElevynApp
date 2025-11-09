import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", 
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B", 
    textAlign: "center",
    marginBottom: 30,
  },
  inputCard: {
    backgroundColor: "#FFFFFF",
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
  registerText: {
    fontSize: 14,
    color: "#475569", 
    textAlign: "center",
    marginTop: 10,
  },
  registerLink: {
    fontSize: 14,
    color: "#0E6BA8", 
    textAlign: "center",
    fontWeight: "600",
    marginTop: 4,
  },
});

export default styles;
