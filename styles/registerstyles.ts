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
    backgroundColor: "#F1F5F9", // dashboard input-like card color
    color: "#0F172A", // text color like dashboard
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4F46E5", // dashboard-style accent button (purple-ish)
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
  color: "#475569", // match dashboard subtext
  textAlign: "center",
  marginTop: 10,
},
loginLink: {
  fontSize: 14,
  color: "#4F46E5", // dashboard accent color
  textAlign: "center",
  fontWeight: "600",
  marginTop: 4,
},
});

export default styles;
