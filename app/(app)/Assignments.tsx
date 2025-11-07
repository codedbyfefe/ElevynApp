import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "styles/assignmentstyles";
import { usePerformance } from "../context/PerformanceContext";

export default function Assignments() {
  const { assignments, addAssignment, toggleAssignmentCompletion } = usePerformance();

  const [filter, setFilter] = useState<"all" | "upcoming" | "overdue">("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const now = new Date();

  // Filter logic
  const filteredAssignments = assignments.filter((a) => {
    const due = new Date(a.dueDate);
    if (filter === "upcoming") return due >= now && !a.completed;
    if (filter === "overdue") return due < now && !a.completed;
    return true;
  });

  // Progress tracker
  const completionRate =
    assignments.length > 0
      ? Math.round(
          (assignments.filter((a) => a.completed).length / assignments.length) * 100
        )
      : 0;

  // Add assignment
  const addNewAssignment = () => {
    if (!newTitle.trim() || !newSubject.trim() || !newDueDate.trim()) return;
    addAssignment({
      title: newTitle,
      completed: false,
      subject: newSubject,
      dueDate: newDueDate,
    });
    setModalVisible(false);
    setNewTitle("");
    setNewSubject("");
    setNewDueDate("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Assignments</Text>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {["all", "upcoming", "overdue"].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => setFilter(type as any)}
            style={[
              styles.filterButton,
              filter === type && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === type && styles.filterTextActive,
              ]}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress Tracker */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Completion: {completionRate}%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${completionRate}%` }]} />
        </View>
      </View>

      {/* Assignment List */}
      <FlatList
        data={[...filteredAssignments].sort(
          (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { borderColor: item.completed ? "#4CAF50" : "#555" },
            ]}
            onPress={() => toggleAssignmentCompletion(item.id)}
          >
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.title,
                  {
                    textDecorationLine: item.completed ? "line-through" : "none",
                    color: item.completed ? "#4CAF50" : "#fff",
                  },
                ]}
              >
                {item.title}
              </Text>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
            </View>
            <Ionicons
              name={item.completed ? "checkmark-circle" : "time-outline"}
              size={24}
              color={item.completed ? "#4CAF50" : "#FFD700"}
            />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No assignments yet 🎓</Text>
        }
        showsVerticalScrollIndicator={false}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={28} color="#fff" />
        <Text style={styles.addButtonText}>Add Assignment</Text>
      </TouchableOpacity>

      {/* Modal for Adding Assignments */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>New Assignment</Text>

            <TextInput
              placeholder="Title"
              placeholderTextColor="#999"
              style={styles.input}
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              placeholder="Subject"
              placeholderTextColor="#999"
              style={styles.input}
              value={newSubject}
              onChangeText={setNewSubject}
            />
            <TextInput
              placeholder="Due Date (YYYY-MM-DD)"
              placeholderTextColor="#999"
              style={styles.input}
              value={newDueDate}
              onChangeText={setNewDueDate}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={addNewAssignment}
              >
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
