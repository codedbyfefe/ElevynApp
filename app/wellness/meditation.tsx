import { fetchMeditations } from "@/src/services/meditationAPI";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "styles/meditationStyles";

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
];

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 50) / 2; // slightly bigger cards
const scrollY = new Animated.Value(0);

export default function MeditationScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadVideos = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const items = await fetchMeditations();
      if (!items || !items.length) throw new Error("No videos returned from API");
      setVideos(items.slice(0, 4)); // only 4 videos
    } catch (err) {
      console.warn("Using fallback videos.");
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
          <Text style={styles.buttonText}>▶ Play</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -40],
    extrapolate: "clamp",
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.headerWrapper,
          { transform: [{ translateY: headerTranslate }, { scale: headerScale }] },
        ]}
      >
        <Text style={styles.header}>🧘 Guided Meditation</Text>
        <Text style={styles.subheader}>Improve focus, recovery & mindfulness.</Text>
      </Animated.View>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : (
        <Animated.FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.videoId + index}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 30, // move videos down
            paddingBottom: 80, // leave space for error text
          }}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: true,
          })}
        />
      )}

      {error && <Text style={styles.errorText}> Using fallback videos. API fetch failed.</Text>}
    </View>
  );
}
