import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function ScreensLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#111" },
        tabBarActiveTintColor: "#4577f5ff",
        tabBarInactiveTintColor: "#aaa",
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          switch (route.name) {
            case "dashboard":
              iconName = "home";
              break;
            case "calendar":
              iconName = "calendar";
              break;
            case "progressdashboard":
              iconName = "stats-chart";
              break;
            case "performancetracker":
              iconName = "barbell";
              break;
            case "weeklytodo":
              iconName = "list";
              break;
            case "wellnesslog":
              iconName = "heart";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
    </Tabs>
  );
}
