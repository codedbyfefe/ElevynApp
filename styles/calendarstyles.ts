import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC", // matches dashboard
    padding: 16,
    paddingBottom: 100, // leave space for navbar
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B", 
    textAlign: "center",
    marginBottom: 20,
  },
  eventBox: {
    marginTop: 16,
    backgroundColor: "#FFFFFF", 
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    color: "#334155", // dashboard card title
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },
  eventRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F1F5F9", // lighter card sub-item
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  eventText: {
    color: "#0F172A", // dashboard text color
    fontSize: 14,
    flex: 1,
  },
  editText: {
    color: "#3B82F6", // action blue
    fontSize: 14,
    marginHorizontal: 8,
    fontWeight: "600",
  },
  deleteText: {
    color: "#EF4444", // red for delete
    fontSize: 14,
    fontWeight: "600",
  },
  noEvent: {
    marginTop: 20,
    color: "#64748B", // gray like dashboard subText
    fontSize: 14,
    fontStyle: "italic",
  },
  addButton: {
    marginTop: 12,
    backgroundColor: "#6366F1", 
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(248, 250, 252, 0.8)", // light overlay
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F1F5F9",
    color: "#0F172A",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  addEventButton: {
    flex: 1,
    backgroundColor: "#0E6BA8",
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
    alignItems: "center",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#E2E8F0",
    padding: 10,
    borderRadius: 8,
    marginLeft: 5,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#0F172A",
    fontWeight: "600",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
  },
  navText: {
    color: "#1E293B",
    fontSize: 16,
  },
});
