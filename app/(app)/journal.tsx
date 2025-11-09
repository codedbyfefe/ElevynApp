import { addJournalEntry, getJournalEntries } from "@/src/services/journalService";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "styles/journalstyles";

export default function JournalScreen() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState<any | null>(null); //  selected entry for modal
  const [modalVisible, setModalVisible] = useState(false); //  modal visibility

  const auth = getAuth();
  const user = auth.currentUser;

  const loadEntries = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getJournalEntries(user.uid);
      setEntries(data);
    } catch (error) {
      console.error("Error loading journal entries:", error);
      Alert.alert("Error", "Failed to load journal entries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleSave = async () => {
    if (!entry.trim()) return;
    try {
      await addJournalEntry(user!.uid, entry);
      setEntry("");
      loadEntries();
      Alert.alert("Saved ", "Your journal entry has been saved.");
    } catch (error) {
      console.error("Error saving journal entry:", error);
      Alert.alert("Error", "Failed to save journal entry.");
    }
  };

  const openEntry = (item: any) => {
    setSelectedEntry(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>✍️ Daily Journal</Text>
          <Text style={styles.subHeader}>Reflect. Write. Grow.</Text>
        </View>

        {/* Input Area */}
        <View style={styles.inputCard}>
          <TextInput
            placeholder="What’s on your mind today?"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
            multiline
            value={entry}
            onChangeText={setEntry}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Entry</Text>
          </TouchableOpacity>
        </View>

        {/* Entries List */}
        <Text style={styles.sectionTitle}>Previous Entries</Text>

        {loading && <ActivityIndicator size="large" color="#0E6BA8" style={{ marginTop: 20 }} />}

        {!loading && entries.length === 0 && (
          <Text style={styles.emptyState}>
            No entries yet. Start journaling your thoughts ✨
          </Text>
        )}

        {entries.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => openEntry(item)} activeOpacity={0.8}>
            <View style={styles.entryCard}>
              <Text
                style={styles.entryText}
                numberOfLines={3} // show preview only
                ellipsizeMode="tail"
              >
                {item.content}
              </Text>
              <Text style={styles.timestamp}>
                {item.timestamp
                  ? new Date(item.timestamp.toDate()).toLocaleString()
                  : "Pending..."}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Full Entry Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {selectedEntry && (
              <>
                <Text style={styles.modalDate}>
                  {selectedEntry.timestamp
                    ? new Date(selectedEntry.timestamp.toDate()).toLocaleString()
                    : ""}
                </Text>
                <ScrollView>
                  <Text style={styles.modalContent}>{selectedEntry.content}</Text>
                </ScrollView>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
