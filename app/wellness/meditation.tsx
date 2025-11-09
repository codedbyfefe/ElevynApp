import { fetchMeditations } from "@/src/services/meditationAPI";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type VideoItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
};

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
  {
    id: { videoId: "yYv3i7PpOaA" },
    snippet: {
      title: "Stress Relief Meditation (10 mins)",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/yYv3i7PpOaA/hqdefault.jpg" } },
    },
  },
  {
    id: { videoId: "aBcDeFgHiJk" },
    snippet: {
      title: "Morning Energy Boost Meditation",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg" } }, // random relaxing video
    },
  },
  {
    id: { videoId: "LmNoPqRsTuV" },
    snippet: {
      title: "Evening Relaxation Meditation",
      thumbnails: { high: { url: "https://i.ytimg.com/vi/DXUAyRRkI6k/hqdefault.jpg" } }, // random cozy thumbnail
    },
  },
];


const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 60) / 2; // two columns with margin

export default function MeditationScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadVideos = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const items = await fetchMeditations(); // ✅ no arguments
      if (!items || !items.length) throw new Error("No videos returned from API");
      setVideos(items.slice(0, 6)); // show up to 6 videos
    } catch (err) {
      console.warn("⚠️ No videos returned from API, using fallback.");
      setVideos(FALLBACK_VIDEOS);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const renderItem = ({ item }: { item: VideoItem }) => {
    const videoId = item.id.videoId;
    const { title, thumbnails } = item.snippet;

    return (
      <View style={styles.card}>
        <Image source={{ uri: thumbnails.high.url }} style={styles.thumbnail} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(`https://youtube.com/watch?v=${videoId}`)}
        >
          <Text style={styles.buttonText}>▶️ Play</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🧘 Guided Meditation</Text>
      <Text style={styles.subheader}>Improve focus, recovery & mindfulness.</Text>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.videoId + index}
          numColumns={2} // two-column grid
          columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {error && <Text style={styles.errorText}>⚠️ Using fallback videos. API fetch failed.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "#F7F9FC",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  thumbnail: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    margin: 8,
    color: "#222",
  },
  button: {
    backgroundColor: "#0E6BA8",
    paddingVertical: 6,
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },
  errorText: {
    marginTop: 20,
    color: "#D32F2F",
    fontWeight: "600",
    textAlign: "center",
  },
});
