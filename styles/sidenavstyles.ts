import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingVertical: 10,
  },
});
