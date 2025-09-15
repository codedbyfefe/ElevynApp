import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  chartContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  donutCenter: {
    position: "absolute",
    top: "42%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  donutText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
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

export default styles;
