import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#f9f9f9ff",
    textAlign:"center",
    marginLeft: 15,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  primaryButton: {
    backgroundColor: "#0E6BA8",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#E2E8F0",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryText: {
    color: "#1E293B",
    fontWeight: "600",
    fontSize: 16,
  },
});
