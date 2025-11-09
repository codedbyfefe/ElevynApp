import { loginUser } from "@/app/firebase/authService";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/loginstyles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      router.replace("/(app)/(tabs)/dashboard");
    } catch (error: unknown) {
      let message = "An unknown error occurred.";
      if (error instanceof Error) message = error.message;
      Alert.alert("Login Failed", message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      <View style={styles.inputCard}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          autoCapitalize="none"
        />

        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.registerLink}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
