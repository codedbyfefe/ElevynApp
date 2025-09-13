import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Button,
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

       {/* Modal for Adding Events */} //Button is not showing, will come back to fix this feature.
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
              placeholder="Enter event (e.g., Training, Exam)"
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
