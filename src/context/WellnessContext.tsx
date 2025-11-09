import { auth } from "@/app/firebase/firebaseConfig";
import { fetchUserData, saveUserData } from "@/app/firebase/firebaseService";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type WellnessOverview = {
  avgSleep: number;
  avgStress: number;
  totalActivity: number;
  latestNutrition: string;
};

type WellnessContextType = {
  overview: WellnessOverview;
  updateOverview: (data: WellnessOverview) => void;
};

const defaultOverview: WellnessOverview = {
  avgSleep: 0,
  avgStress: 0,
  totalActivity: 0,
  latestNutrition: "",
};

export const WellnessContext = createContext<WellnessContextType>({
  overview: defaultOverview,
  updateOverview: () => {},
});

export const WellnessProvider = ({ children }: { children: ReactNode }) => {
  const [overview, setOverview] = useState<WellnessOverview>(defaultOverview);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Listen to Firebase auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Load wellness data from Firestore when user logs in
  useEffect(() => {
    const loadData = async () => {
      if (!currentUser) return;
      const data = await fetchUserData(currentUser.uid);
      if (data?.wellness) {
        setOverview(data.wellness);
      }
      setLoaded(true);
    };
    loadData();
  }, [currentUser]);

  // Save wellness data whenever it changes
  useEffect(() => {
    if (!currentUser || !loaded) return;
    saveUserData(currentUser.uid, { wellness: overview });
  }, [currentUser, overview, loaded]);

  const updateOverview = (data: WellnessOverview) => setOverview(data);

  return (
    <WellnessContext.Provider value={{ overview, updateOverview }}>
      {children}
    </WellnessContext.Provider>
  );
};

// Hook
export const useWellness = () => {
  const context = useContext(WellnessContext);
  if (!context) throw new Error("useWellness must be used within WellnessProvider");
  return context;
};
