import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 4,
  },
  subheader: {
    opacity: 0.6,
    fontSize: 15,
    marginBottom: 12,
  },
  card: {
    marginTop: 18,
    borderRadius: 18,
    backgroundColor: "#ffffff",
    overflow: "hidden",

    // subtle glassy look
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  thumbnail: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 17,
    marginTop: 12,
    fontWeight: "700",
    paddingHorizontal: 14,
  },
  button: {
    alignSelf: "flex-start",
    marginTop: 10,
    paddingHorizontal: 14,
    paddingBottom: 16,
  },
  buttonText: {
    color: "#0066FF",
    fontSize: 16,
    fontWeight: "600",
  },
});
