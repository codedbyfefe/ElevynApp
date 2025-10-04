import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "styles/weeklytodoliststyles";

const WeeklyToDo = () => {
  const router = useRouter();

  // Preloaded weekly tasks
  const [tasks, setTasks] = useState({
    Monday: [
      { id: 1, text: "📚 Assignment: Data Structures Chapter 1", done: false },
      { id: 2, text: "🏀 Training: Gym session", done: false },
    ],
    Tuesday: [
      { id: 3, text: "📚 Study: Algorithms", done: false },
      { id: 4, text: "🏀 Team Practice", done: false },
    ],
    Wednesday: [
      { id: 5, text: "📚 Lecture: UI/UX Design", done: false },
      { id: 6, text: "🛌 Rest/Recovery", done: false },
    ],
    Thursday: [
      { id: 7, text: "📚 Group Project Meeting", done: false },
      { id: 8, text: "🏀 Shooting Drills", done: false },
    ],
    Friday: [
      { id: 9, text: "📚 Lecture: Software Engineering", done: false },
      { id: 10, text: "🏀 Game Day!", done: false },
    ],
    Saturday: [
      { id: 11, text: "🏀 Recovery Training", done: false },
      { id: 12, text: "🧘 Wellness: Meditation", done: false },
    ],
    Sunday: [
      { id: 13, text: "📚 Study: Revision", done: false },
      { id: 14, text: "🛌 Rest", done: false },
    ],
  });

  // Toggle task completion
  const toggleTask = (day: string, id: number) => {
    setTasks((prev) => ({
      ...prev,
      [day]: prev[day].map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✅ Weekly To-Do List</Text>

      <ScrollView>
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
                <Text
                  style={[styles.taskText, task.done && styles.taskTextDone]}
                >
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
