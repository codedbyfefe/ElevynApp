import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 100, // space so content isn't hidden behind nav
    backgroundColor: "#0D1B2A",
  },
  scrollContent: {
    paddingBottom: 120, // ensure scroll doesn’t overlap with nav
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A6E1FA",
    marginTop: 15,
    marginBottom: 10,
  },

  // Card container
  card: {
    backgroundColor: "#1D2D44",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#A6E1FA",
    marginBottom: 10,
  },
  wellnessText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
  valueText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
  insightBox: {
    marginTop: 20,
    backgroundColor: "#1D2D44",
    padding: 15,
    borderRadius: 10,
  },
  insightText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
  //Navbar
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1D2D44",
  },
  navText: {
    color: "#A6E1FA",
    fontSize: 16,
  },
});
