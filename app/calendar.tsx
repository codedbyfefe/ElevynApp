import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Alert,
    Button,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View
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
          ...events,
          [selectedDate]: {
            selected: true,
            selectedColor: "#1D2D44",
            marked: events[selectedDate]?.marked || false,
            dotColor: events[selectedDate]?.dotColor || "#A6E1FA",
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
          <Text style={styles.eventText}>- Training Session</Text>
          <Text style={styles.eventText}>- Study Group</Text>
        </View>
      ) : (
        <Text style={styles.noEvent}>Select a date to see events.</Text>
      )}

       {/* Modal for Adding Events */} 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Add Event</Text>
            <TextInput
              placeholder="Enter event (e.g., Training, Exam)" //Button is not showing, will come back to fix this feature.
              placeholderTextColor="#4d8ac7ff"
              value={newEvent}
              onChangeText={setNewEvent}
              style={styles.input}
            />
            <Button title="Add" onPress={handleAddEvent} />
            <Button
              title="Cancel"
              color="red"
              onPress={() => setModalVisible(false)}
            />
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
