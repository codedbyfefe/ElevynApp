import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0.5, 
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: "#f2f2f2ff",
          borderRadius: 35,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarActiveTintColor: "#0E6BA8",
        tabBarInactiveTintColor: "#6B7280",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          switch (route.name) {
            case "dashboard":
              iconName = focused ? "home" : "home-outline";
              break;
            case "To-Do":
              iconName = focused ? "list" : "list-outline";
              break;
            case "calendar":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "wellnesslog":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "performancetracker":
              iconName = focused ? "barbell" : "barbell-outline";
              break;
          }

          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: focused ? "#E6F6F1" : "transparent",
              }}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={color}
                style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}
              />
            </View>
          );
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
