import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(screens)" options={{ drawerLabel: "settings" }} />
        <Drawer.Screen name="Progress" options={{ drawerLabel: "settings" }} />
        <Drawer.Screen name="settings" options={{ drawerLabel: "index" }} />
        <Drawer.Screen name="Wellness Log" options={{ drawerLabel: "wellnesslog" }} />
        <Drawer.Screen name="index" options={{ drawerLabel: "index" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
