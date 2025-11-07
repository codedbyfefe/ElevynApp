import { createContext, ReactNode, useContext, useState } from "react";

// Type definitions
export type GameStat = { id: number; points: number; rebounds: number; assists: number };
export type Workout = { id: number; name: string; duration: number; load: number };

// ✅ Updated Assignment type to include subject and dueDate
export type Assignment = {
  id: number;
  title: string;
  completed: boolean;
  subject: string;
  dueDate: string; // format YYYY-MM-DD
};

export type AcademicsType = {
  math: number;
  english: number;
  science: number;
};

type PerformanceContextType = {
  gameStats: GameStat[];
  workouts: Workout[];
  academics: AcademicsType;
  assignments: Assignment[];
  addGame: (game: Omit<GameStat, "id">) => void;
  addWorkout: (workout: Omit<Workout, "id" | "load"> & { load?: number }) => void;
  updateAcademics: (data: Partial<AcademicsType>) => void;
  addAssignment: (assignment: Omit<Assignment, "id">) => void;
  toggleAssignmentCompletion: (id: number) => void;
};

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider = ({ children }: { children: ReactNode }) => {
  const [gameStats, setGameStats] = useState<GameStat[]>([]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [academics, setAcademics] = useState<AcademicsType>({
    math: 0,
    english: 0,
    science: 0,
  });

  // ✅ Updated initial assignments with subject and dueDate
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "Essay on Sports Nutrition",
      completed: false,
      subject: "Sports Science",
      dueDate: "2025-10-20",
    },
    {
      id: 2,
      title: "Data Analysis Project",
      completed: false,
      subject: "Statistics",
      dueDate: "2025-10-15",
    },
  ]);

  const addGame = (game: Omit<GameStat, "id">) => {
    setGameStats((prev) => [{ id: Date.now(), ...game }, ...prev]);
  };

  const addWorkout = (workout: Omit<Workout, "id" | "load"> & { load?: number }) => {
    const calculatedLoad = workout.load ?? Math.floor(workout.duration * 4.5);
    setWorkouts((prev) => [{ id: Date.now(), ...workout, load: calculatedLoad }, ...prev]);
  };

  const updateAcademics = (data: Partial<AcademicsType>) => {
    setAcademics((prev) => ({ ...prev, ...data }));
  };

  // ✅ Updated addAssignment to include subject and dueDate
  const addAssignment = (assignment: Omit<Assignment, "id">) => {
    setAssignments((prev) => [{ id: Date.now(), ...assignment }, ...prev]);
  };

  const toggleAssignmentCompletion = (id: number) => {
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

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) throw new Error("usePerformance must be used within PerformanceProvider");
  return context;
};
