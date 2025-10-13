import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "../../styles/assignmentstyles";

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  completed: boolean;
}

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: "1",
      title: "Essay on Sports Nutrition",
      subject: "Sports Science",
      dueDate: "2025-10-20",
      completed: false,
    },
    {
      id: "2",
      title: "Data Analysis Project",
      subject: "Statistics",
      dueDate: "2025-10-15",
      completed: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const toggleComplete = (id: string) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addAssignment = () => {
    if (!newTitle.trim() || !newSubject.trim() || !newDueDate.trim()) return;

    const newItem: Assignment = {
      id: Date.now().toString(),
      title: newTitle,
      subject: newSubject,
      dueDate: newDueDate,
      completed: false,
    };

    setAssignments((prev) => [...prev, newItem]);
    setModalVisible(false);
    setNewTitle("");
    setNewSubject("");
    setNewDueDate("");
  };

  const completionRate =
    assignments.length > 0
      ? Math.round(
          (assignments.filter((a) => a.completed).length / assignments.length) *
            100
        )
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Assignments</Text>

      {/* Progress Tracker */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Completion: {completionRate}%</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${completionRate}%` },
            ]}
          />
        </View>
      </View>

      {/* Assignment List */}
      <FlatList
        data={assignments.sort(
          (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { borderColor: item.completed ? "#4CAF50" : "#555" },
            ]}
            onPress={() => toggleComplete(item.id)}
          >
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.title,
                  { textDecorationLine: item.completed ? "line-through" : "none" },
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
                onPress={addAssignment}
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
