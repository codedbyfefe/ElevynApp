import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "styles/registerstyles"; // import styles
import { registerUser } from "../firebase/authService";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !surname || !email || !password) {
      Alert.alert("Missing Info", "Please fill out all fields.");
      return;
    }

    try {
      await registerUser(name, surname, email, password);
      Alert.alert("Success", "Account created successfully!");
      router.replace("/login");
    } catch (error: any) {
      Alert.alert("Registration Failed", error.message || "Unknown error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <View style={styles.inputCard}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="First Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
          placeholder="Surname"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
  <Text style={styles.loginText}>Already have an account? </Text>
  <TouchableOpacity onPress={() => router.replace("/login")}>
    <Text style={styles.loginLink}>Login</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}
