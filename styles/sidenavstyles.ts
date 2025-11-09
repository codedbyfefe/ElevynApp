import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 10,
    backgroundColor: "#0F172A", // dark blue-ish
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
    marginBottom: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#10B981", // wellness green
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  drawerItemContainer: {
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  logoutSection: {
    borderTopWidth: 1,
    borderTopColor: "#1E293B",
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#1F2937",
  },
});
