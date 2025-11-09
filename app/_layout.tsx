import { ThemeProvider } from "@/src/context/ ThemeContext";
import { SettingsProvider } from "@/src/context/UserSettingsContext";
import { Stack } from "expo-router";
import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

// Wrapper to dismiss keyboard on tap outside
const KeyboardDismissWrapper = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <KeyboardDismissWrapper>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </KeyboardDismissWrapper>
      </SettingsProvider>
    </ThemeProvider>
  );
}
