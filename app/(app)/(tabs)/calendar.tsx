import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "styles/calendarstyles";

export default function CalendarScreen() {
  const router = useRouter();

  // Events are stored as an object: { "YYYY-MM-DD": ["event1", "event2"] }
  const [events, setEvents] = useState<Record<string, string[]>>({
    "2025-09-14": ["Training: Morning gym session", "Study Group"],
    "2025-09-15": ["Lecture: Data Structures class"],
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Load events from storage
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const storedEvents = await AsyncStorage.getItem("events");
        if (storedEvents) {
          setEvents(JSON.parse(storedEvents));
        }
      } catch (error) {
        console.error("Error loading events", error);
      }
    };
    loadEvents();
  }, []);

  // Save events to storage
  useEffect(() => {
    const saveEvents = async () => {
      try {
        await AsyncStorage.setItem("events", JSON.stringify(events));
      } catch (error) {
        console.error("Error saving events", error);
      }
    };
    saveEvents();
  }, [events]);

  // Add or Edit Event
  const handleSaveEvent = () => {
    if (!selectedDate || !newEvent.trim()) return;

    const updatedEvents = { ...events };

    if (editingIndex !== null) {
      // Edit existing
      updatedEvents[selectedDate][editingIndex] = newEvent.trim();
    } else {
      // Add new
      updatedEvents[selectedDate] = [
        ...(events[selectedDate] || []),
        newEvent.trim(),
      ];
    }

    setEvents(updatedEvents);
    setNewEvent("");
    setEditingIndex(null);
    setModalVisible(false);
  };

  // Delete Event
  const handleDeleteEvent = (index: number) => {
    Alert.alert("Delete Event", "Are you sure you want to delete this event?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const updatedEvents = { ...events };
          updatedEvents[selectedDate].splice(index, 1);

          if (updatedEvents[selectedDate].length === 0) {
            delete updatedEvents[selectedDate];
          }

          setEvents(updatedEvents);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🗓️ Planner</Text>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: "#A6E1FA" };
            return acc;
          }, {} as Record<string, any>),
          [selectedDate]: {
            selected: true,
            selectedColor: "#1D2D44",
          },
        }}
        theme={{
          backgroundColor: "#333d47ff",
          calendarBackground: "#ffffffff",
          textSectionTitleColor: "#A7A9AB",
          dayTextColor: "#000000ff",
          monthTextColor: "#164d64ff",
          selectedDayBackgroundColor: "#1D2D44",
          arrowColor: "#164d64ff",
        }}
      />

      {/* Events List */}
      {selectedDate ? (
        <View style={styles.eventBox}>
          <Text style={styles.eventTitle}>Events on {selectedDate}:</Text>
          {events[selectedDate]?.length ? (
            events[selectedDate].map((event, idx) => (
              <View key={idx} style={styles.eventRow}>
                <Text style={styles.eventText}>{event}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setNewEvent(event);
                    setEditingIndex(idx);
                    setModalVisible(true);
                  }}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteEvent(idx)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noEvent}>No events yet. Add one below.</Text>
          )}

          {/* Add Button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setEditingIndex(null);
              setModalVisible(true);
            }}
          >
            <Text style={styles.addButtonText}>+ Add Event</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.noEvent}>Select a date to see events.</Text>
      )}

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {editingIndex !== null ? "Edit Event" : "Add Event"}
            </Text>
            <TextInput
              placeholder="Enter event (e.g., Training, Exam)"
              placeholderTextColor="#999"
              value={newEvent}
              onChangeText={setNewEvent}
              style={styles.input}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.addEventButton}
                onPress={handleSaveEvent}
              >
                <Text style={styles.addButtonText}>
                  {editingIndex !== null ? "Save" : "Add"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
