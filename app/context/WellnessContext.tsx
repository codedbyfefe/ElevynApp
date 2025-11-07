import { createContext, ReactNode, useState } from "react";

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

export const WellnessContext = createContext<WellnessContextType>({
  overview: { avgSleep: 0, avgStress: 0, totalActivity: 0, latestNutrition: "" },
  updateOverview: () => {},
});

export const WellnessProvider = ({ children }: { children: ReactNode }) => {
  const [overview, setOverview] = useState<WellnessOverview>({
    avgSleep: 0,
    avgStress: 0,
    totalActivity: 0,
    latestNutrition: "",
  });

  const updateOverview = (data: WellnessOverview) => setOverview(data);

  return (
    <WellnessContext.Provider value={{ overview, updateOverview }}>
      {children}
    </WellnessContext.Provider>
  );
};
