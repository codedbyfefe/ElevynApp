import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { logoutUser } from "../../firebase/authService";
import { auth, db } from "../../firebase/firebaseConfig";
import styles from "../../styles/sidenavstyles";

// ✅ Import both context providers
import { PerformanceProvider } from "app/context/PerformanceContext";
import { WellnessProvider } from "app/context/WellnessContext";

function CustomDrawerContent(props: any) {
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

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#111" }}
    >
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>
          {userData
            ? `${userData.name} ${userData.surname}`
            : "Loading user..."}
        </Text>
      </View>

      {/* Drawer items */}
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>

      {/* Logout */}
      <View style={styles.logoutSection}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#fff" }}
          icon={({ size }) => (
            <Ionicons name="log-out-outline" size={size} color="#fff" />
          )}
          onPress={async () => {
            await logoutUser();
            router.replace("/login");
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
    // ✅ Wrap the entire app in both providers
    <PerformanceProvider>
      <WellnessProvider>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#00194C" },
            headerTintColor: "#fff",
            drawerStyle: { backgroundColor: "#111", width: 250 },
            drawerActiveTintColor: "#4CAF50",
            drawerInactiveTintColor: "#aaa",
            drawerLabelStyle: { fontSize: 16 },
            sceneContainerStyle: { backgroundColor: "#000" },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 15 }}
              >
                <Image
                  source={{ uri: userAvatar }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: "#fff",
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        >
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: "Dashboard",
              title: "",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Assignments"
            options={{
              drawerLabel: "Assignments",
              title: "",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="book-outline" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="journal"
            options={{
              drawerLabel: "Journal",
              title: "",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="pencil-outline" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Settings",
              title: "",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }}
          />
        </Drawer>
      </WellnessProvider>
    </PerformanceProvider>
  );
}
