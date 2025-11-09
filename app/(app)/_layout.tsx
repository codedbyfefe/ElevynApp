import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
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

  // Active route
  const activeRouteName =
    state?.routeNames[state?.index] || "dashboard";

  return (
    <DrawerContentScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#f5f5f5" }}
    >
      {/* Profile */}
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          marginBottom: 20,
        }}
      >
        <Image
          source={{
            uri: userData?.avatar ||
              "https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg",
          }}
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ color: "#111", fontSize: 18, fontWeight: "600" }}>
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
                color: isActive ? "#fff" : "#111",
                fontWeight: isActive ? "700" : "500",
              }}
              style={{
                marginVertical: 5,
                borderRadius: 8,
                backgroundColor: isActive ? "#0834c7" : "transparent",
              }}
              icon={({ size }) => (
                <Ionicons
                  name={item.icon}
                  size={size}
                  color={isActive ? "#fff" : "#555"}
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
          borderTopColor: "#ccc",
          paddingVertical: 10,
        }}
      >
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#111" }}
          icon={({ size }) => (
            <Ionicons name="log-out-outline" size={size} color="#111" />
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

export default function PrivateLayout() {
  const userAvatar =
    "https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg";

  return (
    <PerformanceProvider>
      <WellnessProvider>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#0E6BA8" },
            headerTintColor: "#fff",
            drawerStyle: { backgroundColor: "#f5f5f5", width: 260 },
            drawerActiveTintColor: "#0E6BA8",
            drawerInactiveTintColor: "#555",
            drawerLabelStyle: { fontSize: 16 },
            sceneContainerStyle: { backgroundColor: "#fff" },
            headerTitle: "", // hide words in header
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 15 }}
              >
                <Image
                  source={{ uri: userAvatar }}
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
      </WellnessProvider>
    </PerformanceProvider>
  );
}
