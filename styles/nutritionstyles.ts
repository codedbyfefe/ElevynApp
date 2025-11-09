import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerWrapper: {
    marginTop: 60, // brought down from top
    marginHorizontal: 20,
    marginBottom: 12,
    alignItems: "center", // center heading horizontally
  },
  header: { fontSize: 28, fontWeight: "700", textAlign: "center" },

  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#eee",
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  thumbnail: { height: 140, borderRadius: 12, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 2 },
  info: { marginBottom: 8, color: "#555" },

  nutritionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  nutrientBox: {
    flex: 1,
    maxWidth: 60, // ensures all fit inside card
    alignItems: "center",
  },
  nutrientText: { fontWeight: "700", fontSize: 14 },
  nutrientLabel: { fontSize: 10, color: "#555" },

  button: {
    marginTop: 8,
    backgroundColor: "#0E6BA8",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
