import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "styles/weeklytodoliststyles";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeeklyToDo = () => {
  const [tasks, setTasks] = useState<{
    [key: string]: { id: number; text: string; done: boolean }[];
  }>({
    Monday: [{ id: 1, text: "Assignment: Data Structures", done: false }],
  });

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskDay, setNewTaskDay] = useState<keyof typeof tasks | string>(
    "Monday"
  );

  const toggleTask = (day: string, id: number) => {
    setTasks((prev) => ({
      ...prev,
      [day]: prev[day].map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  };

  const addTask = () => {
    if (!newTaskText.trim()) return;

    setTasks((prev) => ({
      ...prev,
      [newTaskDay]: [
        ...(prev[newTaskDay] || []),
        { id: Date.now(), text: newTaskText.trim(), done: false },
      ],
    }));
    setNewTaskText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✅ Weekly To-Do List</Text>

      {/* Day Picker */}
      <View style={styles.dayPickerContainer}>
        <Text style={styles.pickerLabel}>Select Day:</Text>
      <Picker
  selectedValue={newTaskDay}
  style={styles.picker}
  dropdownIconColor="#0F172A"
  onValueChange={(itemValue) => setNewTaskDay(itemValue)}
>
  {allDays.map((day) => (
    <Picker.Item key={day} label={day} value={day} color="#0F172A" />
  ))}
</Picker>
      </View>

      {/* Add Task Card */}
      <View style={styles.addTaskCard}>
        <TextInput
          style={styles.input}
          placeholder="New task..."
          placeholderTextColor="#888"
          value={newTaskText}
          onChangeText={setNewTaskText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <ScrollView style={{ marginTop: 20 }}>
        {Object.entries(tasks).map(([day, dayTasks]) => (
          <View key={day} style={styles.dayBox}>
            <Text style={styles.dayTitle}>{day}</Text>
            {dayTasks.map((task) => (
              <TouchableOpacity
                key={task.id}
                style={styles.taskRow}
                onPress={() => toggleTask(day, task.id)}
              >
                <View style={[styles.checkbox, task.done && styles.checkboxDone]} />
                <Text style={[styles.taskText, task.done && styles.taskTextDone]}>
                  {task.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WeeklyToDo;
