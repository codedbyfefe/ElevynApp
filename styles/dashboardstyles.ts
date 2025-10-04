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
  row: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 16,
},
halfCard: {
  flex: 1,
  marginHorizontal: 4,
},
upcomingItem: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 8,
  borderBottomWidth: 0.5,
  borderBottomColor: "#444",
},
upcomingTitle: {
  fontSize: 14,
  color: "#fff",
},
upcomingTime: {
  fontSize: 13,
  color: "#aaa",
},
});
