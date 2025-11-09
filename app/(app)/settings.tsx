// app/settings.tsx
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Alert,
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

  // Firestore & user
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Local settings state
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(false);
  const [sport, setSport] = useState("");
  const [major, setMajor] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(
    "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
  );

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const avatarOptions = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQrQhN6c2aVPRU4DjrKeCBlhd9J4Lc86Clw&s",
    "https://www.shareicon.net/download/2016/08/18/813790_people_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCJMrh3mwIx2Qz8xvQMtyAs4zhmZyMoKdPJ1eyLG85clqo_UqwwMNw89rkqvp7DSNrmw&usqp=CAU",
    "https://www.shareicon.net/data/512x512/2016/09/15/829457_user_512x512.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOpnOlqXaISbhngZxPgnI8UfThhWaK4Rp-jCmQjDAsEg8tOGClk8pRjF_1-O73jtRy0c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WE568AbXqUEOexI8LtxVA1XJQmdEuENTYg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eZ5VRV1Q3svfJSQszfhSEqFYh5RhG3dd2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oxeuqaYZ_OZKb6hTfQQkWtewqDsaY-Xahw&s",
    "https://www.shareicon.net/data/2016/07/26/802042_man_512x512.png",
    
  ];

  // Load user from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return setLoadingUser(false);
      setUserId(user.uid);

      try {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);

          // Populate local state
          setSport(data.sport || "Basketball");
          setMajor(data.major || "Computer Science");
          setSelectedAvatar(
            data.avatar ||
              "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
          );
          setDarkMode(data.darkMode || false);
          setNotifications(data.notifications ?? true);
          setReminders(data.reminders ?? false);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoadingUser(false);
      }
    });
    return unsubscribe;
  }, []);

  // Save changes to Firestore
  const handleSaveChanges = async () => {
    if (!userId) return;

    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        avatar: selectedAvatar,
        sport,
        major,
        darkMode,
        notifications,
        reminders,
      });

      Alert.alert("Saved", "Your settings have been updated.");
    } catch (err) {
      console.error("Error saving settings:", err);
      Alert.alert("Error", "Could not save settings. Try again later.");
    } finally {
      setActiveModal(null);
    }
  };

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
            <Text style={styles.profileDetails}>🏆 Sport: {sport}</Text>
            <Text style={styles.profileDetails}>🎓 Major(s): {major}</Text>
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
            <Text style={styles.optionText}>🏆 Update Sport</Text>
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
      <Modal transparent visible={!!activeModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {/* Avatar Selection */}
            {activeModal === "avatar" && (
              <>
                <Text style={styles.modalTitle}>Select an Avatar</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
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

            {activeModal === "reminders" && (
              <>
                <Text style={styles.modalTitle}>Reminders</Text>
                <View style={styles.settingOptionRow}>
                  <Text style={styles.optionText}>Daily Reminders</Text>
                  <Switch value={reminders} onValueChange={setReminders} />
                </View>
              </>
            )}

            {/* Save & Close */}
            <TouchableOpacity style={styles.modalButton} onPress={handleSaveChanges}>
              <Text style={styles.modalButtonText}> Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
