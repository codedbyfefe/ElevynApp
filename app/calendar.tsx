import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "../styles/calendarstyles";

interface Event {
  title: string;
  description: string;
  date: string;
}

const CalendarScreen = () => {
  const [events, setEvents] = useState<Event[]>([
    { title: "Training", description: "Morning gym session", date: "2025-09-14" },
    { title: "Lecture", description: "Data Structures class", date: "2025-09-15" },
  ]);
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Load saved events
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const storedEvents = await AsyncStorage.getItem("events");
        if (storedEvents) setEvents(JSON.parse(storedEvents));
      } catch (error) {
        console.error("Failed to load events", error);
      }
    };
    loadEvents();
  }, []);

  // Save events
  const saveEvents = async (updatedEvents: Event[]) => {
    try {
      await AsyncStorage.setItem("events", JSON.stringify(updatedEvents));
    } catch (error) {
      console.error("Failed to save events", error);
    }
  };

  // Add or Edit event
  const handleAddEvent = () => {
    if (!newTitle || !selectedDate) return;

    let updatedEvents: Event[];
    if (editingIndex !== null) {
      updatedEvents = [...events];
      updatedEvents[editingIndex] = {
        ...updatedEvents[editingIndex],
        title: newTitle,
        description: newDescription,
      };
      setEditingIndex(null);
    } else {
      updatedEvents = [...events, { title: newTitle, description: newDescription, date: selectedDate }];
    }

    setEvents(updatedEvents);
    saveEvents(updatedEvents);
    setModalVisible(false);
    setNewTitle("");
    setNewDescription("");
  };

  // Delete event
  const handleDeleteEvent = (index: number) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    saveEvents(updatedEvents);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Calendar</Text>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#A6E1FA" },
          ...events.reduce(
            (acc, event) => ({
              ...acc,
              [event.date]: { marked: true, dotColor: "#A6E1FA" },
            }),
            {}
          ),
        }}
        theme={{
          calendarBackground: "#111315",
          dayTextColor: "#FFFFFF",
          monthTextColor: "#A6E1FA",
          arrowColor: "#A6E1FA",
        }}
      />

      {/* Events List */}
      <FlatList
        data={events.filter((event) => event.date === selectedDate)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.eventBox}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventText}>{item.description}</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => {
                  setEditingIndex(index);
                  setNewTitle(item.title);
                  setNewDescription(item.description);
                  setModalVisible(true);
                }}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteEvent(index)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noEvent}>No events for this day.</Text>}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{editingIndex !== null ? "Edit Event" : "Add Event"}</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Title"
              placeholderTextColor="#888"
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#888"
              value={newDescription}
              onChangeText={setNewDescription}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.addEventButton} onPress={handleAddEvent}>
                <Text style={styles.addButtonText}>
                  {editingIndex !== null ? "Save Changes" : "Add Event"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                  setEditingIndex(null);
                  setNewTitle("");
                  setNewDescription("");
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push("/dashboard")}>
          <Text style={styles.navText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/progress")}>
          <Text style={styles.navText}>📊 Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/calendar")}>
          <Text style={styles.navText}>📅 Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Text style={styles.navText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarScreen;
