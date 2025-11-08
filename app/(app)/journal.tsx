import { addJournalEntry, getJournalEntries } from "@/src/services/journalService";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function JournalScreen() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const user = auth.currentUser;

  const loadEntries = async () => {
    if (!user) return;
    setLoading(true);
    const data = await getJournalEntries(user.uid);
    setEntries(data);
    setLoading(false);
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
      Alert.alert("Saved ✅", "Your journal entry has been saved.");
    } catch {
      Alert.alert("Error", "Failed to save journal entry.");
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>

      <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 15 }}>
        ✍️ Daily Journal
      </Text>

      <TextInput
        placeholder="Write your thoughts..."
        style={{
          height: 140,
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          marginBottom: 15,
        }}
        multiline
        value={entry}
        onChangeText={setEntry}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2b7a4b",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
        onPress={handleSave}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Save Journal Entry
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
        📚 Previous Entries
      </Text>

      {loading && <ActivityIndicator size="large" />}

      {entries.map((item) => (
        <View
          key={item.id}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.content}</Text>
          <Text style={{ opacity: 0.6, fontSize: 12, marginTop: 5 }}>
            {new Date(item.timestamp.toDate()).toLocaleString()}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
