"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialeState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialeState);
  const resetRange = () => setRange(initialeState);

  return (
    <ReservationContext.Provider value={{ range, setRange , resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
  // Add any reservation-related data or functions here
}
function useReservation() {
  const context = useContext(ReservationContext);
  if (!context)
    throw new Error("useReservation must be used within a ReservationProvider");
  return context;
}
export { ReservationProvider, useReservation };
