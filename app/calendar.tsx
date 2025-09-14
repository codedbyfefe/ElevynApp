import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "../styles/calendarstyles";

export default function CalendarScreen() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState<any>({}); 
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState("");
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddEvent = () => {
    if (selectedDate && newEvent.trim() !== "") {
      const updatedEvents = {
        ...events,
        [selectedDate]: [
          ...(events[selectedDate] || []),
          newEvent.trim(),
        ],
      };
      setEvents(updatedEvents);
      setNewEvent("");
      setModalVisible(false);
    }
  };

  // Loads events when the app starts
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

  //Saves events whenever they change
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
      // Edit existing event
      updatedEvents[selectedDate][editingIndex] = newEvent.trim();
    } else {
      // Add new event
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
      <Text style={styles.header}>📅 Training & Academic Planner</Text>

      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#1D2D44",
            dotColor: "#A6E1FA",
            marked: !!events[selectedDate]?.length,
          },
        }}
        theme={{
          backgroundColor: "#111315",
          calendarBackground: "#111315",
          textSectionTitleColor: "#A7A9AB",
          dayTextColor: "#FFFFFF",
          monthTextColor: "#A6E1FA",
          selectedDayBackgroundColor: "#1D2D44",
          arrowColor: "#A6E1FA",
        }}
      />

      {selectedDate ? (
        <View style={styles.eventBox}>
          <Text style={styles.eventTitle}>Events on {selectedDate}:</Text>

          {events[selectedDate]?.length ? (
            <FlatList
              data={events[selectedDate]}
              keyExtractor={(item, index) => `${selectedDate}-${index}`}
              renderItem={({ item, index }) => (
                <View style={styles.eventRow}>
                  <Text style={styles.eventText}>• {item}</Text>
                  <View style={styles.eventActions}>
                    <TouchableOpacity
                      onPress={() => {
                        setNewEvent(item);
                        setEditingIndex(index);
                        setModalVisible(true);
                      }}
                    >
                      <Text style={styles.editText}>✏️ Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteEvent(index)}>
                      <Text style={styles.deleteText}>🗑 Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <Text style={styles.noEvent}>No events yet for this date.</Text>
          )}

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setNewEvent("");
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
                <Text style={styles.addEventButtonText}>
                  {editingIndex !== null ? "Save" : "Add"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                  setNewEvent("");
                  setEditingIndex(null);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Nav */}
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
}
