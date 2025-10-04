import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: "#111",
          width: 240,
        },
        drawerActiveTintColor: "#4CAF50",
        drawerInactiveTintColor: "#aaa",
      }}
    >
      {/* Drawer points to the tab-based navigation in (screens) */}
      <Drawer.Screen
        name="(screens)"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* can add stabdalone routes here if neccessary */}
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
