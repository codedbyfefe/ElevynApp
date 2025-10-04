import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#111" },
        tabBarActiveTintColor: "#0834c7ff",
        tabBarInactiveTintColor: "#aaa",
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          switch (route.name) {
            case "dashboard":
              iconName = "home";
              break;
            case "calendar":
              iconName = "calendar-outline";
              break;
            case "performancetracker":
              iconName = "barbell-outline";
              break;
            case "weeklytodo":
              iconName = "checkmark-done-outline"; // this icon isnt displaying properly (need to fix)
              break;
            case "wellnesslog":
              iconName = "heart-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="calendar" options={{ title: "Calendar" }} />
      <Tabs.Screen
        name="performancetracker"
        options={{ title: "Performance" }}
      />
      <Tabs.Screen name="weeklytodo" options={{ title: "Weekly To-Do" }} />
      <Tabs.Screen name="wellnesslog" options={{ title: "Wellness" }} />
    </Tabs>
  );
}
