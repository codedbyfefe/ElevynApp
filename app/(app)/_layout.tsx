import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { logoutUser } from "../../firebase/authService";
import { auth, db } from "../../firebase/firebaseConfig";

// Context providers
import { PerformanceProvider } from "@/src/context/PerformanceContext";
import { SettingsProvider, useSettings } from "@/src/context/UserSettingsContext";
import { WellnessProvider } from "@/src/context/WellnessContext";

type IconNames = keyof typeof Ionicons.glyphMap;

const drawerItems: { label: string; route: string; icon: IconNames }[] = [
  { label: "Dashboard", route: "/(tabs)", icon: "home-outline" },
  { label: "Assignments", route: "/Assignments", icon: "book-outline" },
  { label: "Journal", route: "/journal", icon: "pencil-outline" },
  { label: "Settings", route: "/settings", icon: "settings-outline" },
];

function CustomDrawerContent({ state }: any) {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const { darkMode, selectedAvatar } = useSettings();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) setUserData(userDoc.data());
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      }
    });
    return unsubscribe;
  }, []);

  const activeRouteName = state?.routeNames[state?.index] || "dashboard";

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: darkMode ? "#0B132B" : "#f5f5f5",
      }}
    >
      {/* Profile */}
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
          borderBottomWidth: 1,
          borderBottomColor: darkMode ? "#444" : "#ccc",
          marginBottom: 20,
        }}
      >
        <Image
          source={{ uri: selectedAvatar }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text
          style={{
            color: darkMode ? "#fff" : "#111",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {userData ? `${userData.name} ${userData.surname}` : "Loading..."}
        </Text>
      </View>

      {/* Drawer Items */}
      <View style={{ flex: 1 }}>
        {drawerItems.map((item) => {
          const isActive =
            activeRouteName === item.route.replace("/", "") ||
            (item.route === "/(tabs)" && activeRouteName === "dashboard");

          return (
            <DrawerItem
              key={item.route}
              label={item.label}
              labelStyle={{
                color: isActive
                  ? "#fff"
                  : darkMode
                  ? "#ddd"
                  : "#111",
                fontWeight: isActive ? "700" : "500",
              }}
              style={{
                marginVertical: 5,
                borderRadius: 8,
                backgroundColor: isActive
                  ? darkMode
                    ? "#1C2541"
                    : "#0834c7"
                  : "transparent",
              }}
              icon={({ size }) => (
                <Ionicons
                  name={item.icon}
                  size={size}
                  color={
                    isActive
                      ? "#fff"
                      : darkMode
                      ? "#ccc"
                      : "#555"
                  }
                />
              )}
              onPress={() => router.push(item.route as any)}
            />
          );
        })}
      </View>

      {/* Logout */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: darkMode ? "#333" : "#ccc",
          paddingVertical: 10,
        }}
      >
        <DrawerItem
          label="Logout"
          labelStyle={{ color: darkMode ? "#fff" : "#111" }}
          icon={({ size }) => (
            <Ionicons
              name="log-out-outline"
              size={size}
              color={darkMode ? "#fff" : "#111"}
            />
          )}
          onPress={async () => {
            await logoutUser();
            router.replace("/login" as const);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerWithContext() {
  const { darkMode, selectedAvatar } = useSettings();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: darkMode ? "#1C2541" : "#0E6BA8",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: darkMode ? "#0B132B" : "#f5f5f5",
          width: 260,
        },
        drawerActiveTintColor: darkMode ? "#A6E1FA" : "#0E6BA8",
        drawerInactiveTintColor: darkMode ? "#ddd" : "#555",
        drawerLabelStyle: { fontSize: 16 },
        sceneContainerStyle: {
          backgroundColor: darkMode ? "#1C2541" : "#fff",
        },
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Image
              source={{ uri: selectedAvatar }}
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                borderWidth: 1,
                borderColor: "#fff",
              }}
            />
          </TouchableOpacity>
        ),
      })}
    >
      {drawerItems.map((item) => (
        <Drawer.Screen
          key={item.route}
          name={item.route.replace("/", "") || "dashboard"}
          options={{
            drawerLabel: item.label,
            drawerIcon: ({ color, size }) => (
              <Ionicons name={item.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Drawer>
  );
}

export default function PrivateLayout() {
  return (
    <PerformanceProvider>
      <WellnessProvider>
        <SettingsProvider>
          <DrawerWithContext />
        </SettingsProvider>
      </WellnessProvider>
    </PerformanceProvider>
  );
}
