import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 40) / 2; // bigger cards now

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 100, // push header down more
  },
  headerWrapper: {
    marginHorizontal: 20,
    marginBottom: 25,
    alignItems: "center",
  },
  header: {
    fontSize: 34,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    color: "#555",
    marginTop: 6,
    textAlign: "center",
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    marginBottom: 26, // space between cards
  },
  thumbnail: {
    width: "100%",
    height: cardWidth * 0.6, // slightly taller thumbnails for bigger cards
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    margin: 10,
    color: "#222",
  },
  button: {
    backgroundColor: "#0E6BA8",
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },
  errorText: {
    marginTop: 20,
    marginBottom: 20,
    color: "#D32F2F",
    fontWeight: "500",
    fontSize: 13,
    textAlign: "center",
  },
});
