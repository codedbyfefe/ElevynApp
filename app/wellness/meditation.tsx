// app/(app)/(tabs)/wellness/meditation.tsx
import { fetchMeditations } from "app/services/meditationAPI";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type VideoItem = any;

const FALLBACK_VIDEOS: VideoItem[] = [
  {
    id: { videoId: "inpok4MKVLM" },
    snippet: {
      title: "10 Minute Guided Meditation for Anxiety",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg" } },
    },
  },
  {
    id: { videoId: "6p_yaNFSYao" },
    snippet: {
      title: "Daily Mindfulness Meditation (5 minutes)",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/6p_yaNFSYao/hqdefault.jpg" } },
    },
  },
  {
    id: { videoId: "O-6f5wQXSu8" },
    snippet: {
      title: "Guided Meditation for Deep Focus",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/O-6f5wQXSu8/hqdefault.jpg" } },
    },
  },
];

export default function MeditationScreen() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [error, setError] = useState(false);

  const loadVideos = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const items = await fetchMeditations(); // ✅ no args needed
      if (!items || !items.length) throw new Error("No items returned");
      setVideos(items);
    } catch (err) {
      console.error("Meditation API Error:", err);
      setVideos(FALLBACK_VIDEOS);
      setError(true);
      Alert.alert("Using fallback videos", "Could not fetch from API.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🧘 Guided Meditation</Text>
      <Text style={styles.subheader}>
        Recommended meditation videos for performance, focus & recovery.
      </Text>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {!loading &&
        videos.map((video, index) => {
          const videoId = video.id?.videoId;
          const title = video.snippet?.title;
          const thumbnail = video.snippet?.thumbnails?.high?.url;

          return (
            <View key={index} style={styles.card}>
              {thumbnail && <Image source={{ uri: thumbnail }} style={styles.thumbnail} />}
              <Text style={styles.title}>{title}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL(`https://youtube.com/watch?v=${videoId}`)}
              >
                <Text style={styles.buttonText}>▶️ Play Meditation</Text>
              </TouchableOpacity>
            </View>
          );
        })}

      {!loading && error && (
        <Text style={{ marginTop: 20, color: "red" }}>
          ⚠️ Using fallback videos. API fetch failed.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1, backgroundColor: "#fff" },
  header: { fontSize: 28, fontWeight: "700", marginBottom: 16 },
  subheader: { opacity: 0.7, marginBottom: 10 },
  card: { marginTop: 20, borderWidth: 1, borderColor: "#ddd", padding: 14, borderRadius: 10 },
  thumbnail: { width: "100%", height: 180, borderRadius: 10 },
  title: { fontSize: 18, marginTop: 10, fontWeight: "600" },
  button: { marginTop: 8 },
  buttonText: { color: "#0a7a34", fontWeight: "600" },
});
