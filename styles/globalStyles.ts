import { StyleSheet } from "react-native";

export const createGlobalStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    text: {
      color: theme.text,
      fontSize: 16,
    },
    header: {
      fontSize: 22,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 12,
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      borderColor: theme.border,
      borderWidth: 1,
    },
    input: {
      backgroundColor: theme.inputBackground,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      color: theme.text,
      marginBottom: 12,
    },
    button: {
      backgroundColor: theme.buttonBackground,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 8,
    },
    buttonText: {
      color: theme.buttonText,
      fontWeight: "bold",
    },
  });
