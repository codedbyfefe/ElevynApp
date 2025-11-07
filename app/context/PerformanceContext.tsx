import { onAuthStateChanged, User } from "firebase/auth";
import { fetchUserData, saveUserData } from "firebase/firebaseService";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConfig";

// Types
export type GameStat = { id: string; points: number; rebounds: number; assists: number };
export type Workout = { id: string; name: string; duration: number; load: number };

// ✅ Updated Assignment type
export type Assignment = {
  id: string;
  title: string;
  completed: boolean;
  subject: string;
  dueDate: string;
};

export type AcademicsType = { math: number; english: number; science: number };

type PerformanceContextType = {
  gameStats: GameStat[];
  workouts: Workout[];
  academics: AcademicsType;
  assignments: Assignment[];
  addGame: (game: Omit<GameStat, "id">) => void;
  addWorkout: (workout: Omit<Workout, "id" | "load"> & { load?: number }) => void;
  updateAcademics: (data: Partial<AcademicsType>) => void;
  addAssignment: (assignment: Omit<Assignment, "id">) => void;
  toggleAssignmentCompletion: (id: string) => void;
};

// Context
const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

// Helper to generate unique string IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const PerformanceProvider = ({ children }: { children: ReactNode }) => {
  const [gameStats, setGameStats] = useState<GameStat[]>([]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [academics, setAcademics] = useState<AcademicsType>({ math: 0, english: 0, science: 0 });
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false); // Prevent saving before initial load

  // Listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Load Firestore data once when user is set
  useEffect(() => {
    const loadData = async () => {
      if (!currentUser) return;
      const data = await fetchUserData(currentUser.uid);
      if (data) {
        setGameStats(data.gameStats || []);
        setWorkouts(data.workouts || []);
        // ✅ Migrate old assignments that lack `subject` or `dueDate`
        const migratedAssignments = (data.assignments || []).map((a: any) => ({
          id: a.id ?? generateId(),
          title: a.title ?? "Untitled",
          completed: a.completed ?? false,
          subject: a.subject ?? "General",
          dueDate: a.dueDate ?? new Date().toISOString().split("T")[0],
        }));
        setAssignments(migratedAssignments);
        setAcademics(data.academics || { math: 0, english: 0, science: 0 });
      }
      setLoaded(true); // Mark that initial load is complete
    };
    loadData();
  }, [currentUser]);

  // Save to Firestore whenever state changes (after initial load)
  useEffect(() => {
    if (!currentUser || !loaded) return;
    saveUserData(currentUser.uid, { gameStats, workouts, assignments, academics });
  }, [currentUser, gameStats, workouts, assignments, academics, loaded]);

  // Handlers
  const addGame = (game: Omit<GameStat, "id">) => {
    setGameStats((prev) => [{ id: generateId(), ...game }, ...prev]);
  };

  const addWorkout = (workout: Omit<Workout, "id" | "load"> & { load?: number }) => {
    const load = workout.load ?? Math.floor(workout.duration * 4.5);
    setWorkouts((prev) => [{ id: generateId(), ...workout, load }, ...prev]);
  };

  const updateAcademics = (data: Partial<AcademicsType>) => {
    setAcademics((prev) => ({ ...prev, ...data }));
  };

  const addAssignment = (assignment: Omit<Assignment, "id">) => {
    setAssignments((prev) => [{ id: generateId(), ...assignment }, ...prev]);
  };

  const toggleAssignmentCompletion = (id: string) => {
    setAssignments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, completed: !a.completed } : a))
    );
  };

  return (
    <PerformanceContext.Provider
      value={{
        gameStats,
        workouts,
        academics,
        assignments,
        addGame,
        addWorkout,
        updateAcademics,
        addAssignment,
        toggleAssignmentCompletion,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};

// Hook
export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) throw new Error("usePerformance must be used within PerformanceProvider");
  return context;
};
