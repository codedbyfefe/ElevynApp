import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  card: {
    flex: 1,
    backgroundColor: "#1D2D44",
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cardTitle: {
    color: "#A7A9AB",
    fontSize: 16,
    marginBottom: 8,
  },
  cardValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },
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
