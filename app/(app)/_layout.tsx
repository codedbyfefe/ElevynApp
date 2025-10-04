import Ionicons from "@expo/vector-icons/Ionicons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../../styles/sidenavstyles";

type DrawerParamList = {
  "(tabs)": undefined;
  settings: undefined;
};

function CustomDrawerContent(props: any) {
  const router = useRouter();
  const user = {
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/100", //placeholder image
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#111" }}
    >
      {/*Profile Section */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
      </View>

      {/*Drawer Items */}
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>

      {/*Logout */}
      <View style={styles.logoutSection}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#fff" }}
          icon={({ size }) => (
            <Ionicons name="log-out-outline" size={size} color="#fff" />
          )}
          onPress={() => router.replace("/login")}
        />
      </View>
    </DrawerContentScrollView>
  );
}


export default function PrivateLayout() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const userAvatar = "https://via.placeholder.com/100"; //placeholder image

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
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
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 15, flexDirection: "row" }}
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
          </Pressable>
        ),
      })}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Dashboard",
          title: "",                 // keep this empty so it doesn't display in the header
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
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
  );
}

