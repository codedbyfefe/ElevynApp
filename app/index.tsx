import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "styles/landingstyles";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo or App Name */}
      <Image
        source={require("../images/ElevynLogo.png")} 
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to Elevyn</Text>
      <Text style={styles.subtitle}>
        Balancing Academics and Athletics, Smarter.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
