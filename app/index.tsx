import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "styles/landingstyles";

const { width, height } = Dimensions.get("window");

export default function LandingScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8FAFC", // matches your dashboard light vibe
        }}
      >
        <ActivityIndicator size="large" color="#0E6BA8" />
        <Text
          style={{
            marginTop: 15,
            fontSize: 18,
            fontWeight: "600",
            color: "#1E293B",
          }}
        >
          Loading Elevyn...
        </Text>
      </View>
    );
  }

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      {/* Background Image */}
      <ImageBackground
        source={require("../images/Background.png")} // swap with your image
        style={{ flex: 1, justifyContent: "space-between", padding: 20 }}
        resizeMode="cover"
      >
        {/* Top Section - Logo */}
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Image
            source={require("../images/ElevynLogo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to Elevyn</Text>
          <Text style={styles.subtitle}>
            Balancing Academics and Athletics, Smarter.
          </Text>
        </View>

        {/* Bottom Section - Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              { flex: 1, marginRight: 8, shadowColor: "#0E6BA8", shadowOpacity: 0.4, shadowRadius: 10, elevation: 5 },
            ]}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.primaryText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.secondaryButton,
              { flex: 1, marginLeft: 8, shadowColor: "#001C55", shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
            ]}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.secondaryText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
