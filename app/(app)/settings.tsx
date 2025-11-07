import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "firebase/firebaseConfig"; // adjust path if needed
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "styles/settingsstyles";

const SettingsScreen = () => {
  const router = useRouter();

  // 🔹 User data from Firestore
  const [userData, setUserData] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Other state
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(false);

  // Demo form state
  const [sport, setSport] = useState("Basketball");
  const [major, setMajor] = useState("Computer Science");
  const [selectedAvatar, setSelectedAvatar] = useState("https://t3.ftcdn.net/jpg/15/34/03/58/360_F_1534035806_6gn57ou4V0dVZY6l30h6nEB5gWQRAP6v.jpg");

  // Avatar options
  const avatarOptions = [
    "https://via.placeholder.com/100/FF5733",
    "https://via.placeholder.com/100/33FF57",
    "https://via.placeholder.com/100/3357FF",
    "https://via.placeholder.com/100/FFFF33",
  ];

  // 🔹 Load user data on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoadingUser(false);
        }
      } else {
        setLoadingUser(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#0B132B" : "#F5F5F5" },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>⚙️ Settings</Text>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: selectedAvatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {loadingUser
                ? "Loading..."
                : userData
                ? `${userData.name} ${userData.surname}`
                : "Unknown User"}
            </Text>
            <Text style={styles.profileDetails}>🏀 Sport: {sport}</Text>
            <Text style={styles.profileDetails}>🎓 Major: {major}</Text>
          </View>
        </View>

        {/* Profile Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Profile Settings</Text>

          <TouchableOpacity
            style={styles.settingOption}
            onPress={() => setActiveModal("avatar")}
          >
            <Text style={styles.optionText}>🖼️ Change Avatar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingOption}
            onPress={() => setActiveModal("sport")}
          >
            <Text style={styles.optionText}>🏀 Update Sport</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingOption}
            onPress={() => setActiveModal("major")}
          >
            <Text style={styles.optionText}>🎓 Change Major</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingOptionRow}>
            <Text style={styles.optionText}>🌙 Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#767577", true: "#A6E1FA" }}
              thumbColor={darkMode ? "#0B132B" : "#f4f3f4"}
            />
          </View>

          <TouchableOpacity
            style={styles.settingOption}
            onPress={() => setActiveModal("notifications")}
          >
            <Text style={styles.optionText}>🔔 Notification Preferences</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingOption}
            onPress={() => setActiveModal("reminders")}
          >
            <Text style={styles.optionText}>⏰ Reminders</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal transparent visible={activeModal !== null} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {/* Avatar Selection */}
            {activeModal === "avatar" && (
              <>
                <Text style={styles.modalTitle}>Select an Avatar</Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {avatarOptions.map((uri, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => setSelectedAvatar(uri)}
                      style={{ margin: 8 }}
                    >
                      <Image
                        source={{ uri }}
                        style={[
                          styles.avatar,
                          {
                            borderWidth: selectedAvatar === uri ? 2 : 0,
                            borderColor: "#A6E1FA",
                          },
                        ]}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* Sport Update */}
            {activeModal === "sport" && (
              <>
                <Text style={styles.modalTitle}>Update Sport</Text>
                <TextInput
                  value={sport}
                  onChangeText={setSport}
                  placeholder="Enter new sport"
                  placeholderTextColor="#A7A9AB"
                  style={styles.input}
                />
              </>
            )}

            {/* Major Update */}
            {activeModal === "major" && (
              <>
                <Text style={styles.modalTitle}>Change Major</Text>
                <TextInput
                  value={major}
                  onChangeText={setMajor}
                  placeholder="Enter new major"
                  placeholderTextColor="#A7A9AB"
                  style={styles.input}
                />
              </>
            )}

            {/* Notifications */}
            {activeModal === "notifications" && (
              <>
                <Text style={styles.modalTitle}>Notification Preferences</Text>
                <View style={styles.settingOptionRow}>
                  <Text style={styles.optionText}>Enable Notifications</Text>
                  <Switch
                    value={notifications}
                    onValueChange={setNotifications}
                  />
                </View>
              </>
            )}

            {/* Reminders */}
            {activeModal === "reminders" && (
              <>
                <Text style={styles.modalTitle}>Reminders</Text>
                <View style={styles.settingOptionRow}>
                  <Text style={styles.optionText}>Daily Reminders</Text>
                  <Switch value={reminders} onValueChange={setReminders} />
                </View>
              </>
            )}

            {/* Close Button */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setActiveModal(null)}
            >
              <Text style={styles.modalButtonText}>Save & Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
