import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SettingsContextType = {
  darkMode: boolean;
  notifications: boolean;
  reminders: boolean;
  selectedAvatar: string;
  toggleDarkMode: () => void;
  setNotifications: (val: boolean) => void;
  setReminders: (val: boolean) => void;
  setSelectedAvatar: (val: string) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
  );

  // Load saved preferences on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedSettings = await AsyncStorage.getItem("userSettings");
        if (storedSettings) {
          const parsed = JSON.parse(storedSettings);
          setDarkMode(parsed.darkMode ?? false);
          setNotifications(parsed.notifications ?? true);
          setReminders(parsed.reminders ?? false);
          setSelectedAvatar(
            parsed.selectedAvatar ??
              "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
          );
        }
      } catch (err) {
        console.error("Error loading settings:", err);
      }
    };
    loadSettings();
  }, []);

  // Save settings whenever they change
  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem(
          "userSettings",
          JSON.stringify({ darkMode, notifications, reminders, selectedAvatar })
        );
      } catch (err) {
        console.error("Error saving settings:", err);
      }
    };
    saveSettings();
  }, [darkMode, notifications, reminders, selectedAvatar]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        notifications,
        reminders,
        selectedAvatar,
        toggleDarkMode,
        setNotifications,
        setReminders,
        setSelectedAvatar,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
};
