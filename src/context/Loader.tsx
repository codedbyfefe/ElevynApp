// components/Loader.tsx
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Loader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds or adjust
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/loader.json")}
        autoPlay
        loop={false}
        style={{ width: width * 0.6, height: width * 0.6 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",   // light bg to match dashboard
    justifyContent: "center",
    alignItems: "center",
  },
});

