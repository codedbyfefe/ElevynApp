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
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          switch (route.name) {
            case "dashboard":
              iconName = "home-outline";
              break;
            case "To-Do":
              iconName = "list-outline";
              break;
            case "calendar":
              iconName = "calendar-outline";
              break;
            case "wellnesslog":
              iconName = "heart-outline";
              break;
            case "performancetracker":
              iconName = "barbell-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="To-Do" options={{ title: "To-Do" }} />
      <Tabs.Screen name="calendar" options={{ title: "Calendar" }} />
      <Tabs.Screen name="wellnesslog" options={{ title: "Wellness" }} />
      <Tabs.Screen
        name="performancetracker"
        options={{ title: "Performance" }}
      />
    </Tabs>
  );
}
