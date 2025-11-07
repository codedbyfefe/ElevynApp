// app/(app)/(tabs)/wellness/meditation.tsx

import { fetchMeditations } from "app/services/meditationAPI";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  ScrollView,
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

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const items = await fetchMeditations("guided meditation for athletes 10 minute");
        if (!items.length) throw new Error("No items returned");
        setVideos(items);
      } catch (err) {
        console.error("Meditation API Error:", err);
        setVideos(FALLBACK_VIDEOS); // ✅ fallback, no blank UI
        Alert.alert("Using fallback videos", "Could not fetch from API.");
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 16 }}>
        🧘 Guided Meditation
      </Text>

      <Text style={{ opacity: 0.7, marginBottom: 10 }}>
        Recommended meditation videos for performance, focus & recovery.
      </Text>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {videos.map((video, index) => {
        const videoId = video.id?.videoId;
        const title = video.snippet?.title;
        const thumbnail = video.snippet?.thumbnails?.high?.url;

        return (
          <View key={index} style={{ marginTop: 20, borderWidth: 1, padding: 14, borderRadius: 10 }}>
            {thumbnail && (
              <Image
                source={{ uri: thumbnail }}
                style={{ width: "100%", height: 180, borderRadius: 10 }}
              />
            )}

            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: "600" }}>{title}</Text>

            <TouchableOpacity
              style={{ marginTop: 8 }}
              onPress={() => Linking.openURL(`https://youtube.com/watch?v=${videoId}`)}
            >
              <Text style={{ color: "#0a7a34", fontWeight: "600" }}>▶️ Play Meditation</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}
