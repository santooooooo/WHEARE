import React, { createContext, useState, useContext } from "react";

const CurrentLocationContext = createContext({
  checked: true,
  setChecked: (f: boolean): void => {},
  resetChecked: (): void => {},
});
const LatitudeContext = createContext({
  latitude: "",
  setLatitude: (f: string): void => {},
  resetLatitude: (): void => {},
});
const LongitudeContext = createContext({
  longitude: "",
  setLongitude: (f: string): void => {},
  resetLongitude: (): void => {},
});
export const useCurrentLocation = () => useContext(CurrentLocationContext);
export const useLatitude = () => useContext(LatitudeContext);
export const useLongitude = () => useContext(LongitudeContext);

export default function DataProvider({ children }: any) {
  const [checked, setChecked] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const resetChecked = () => {
    setChecked(true);
  };
  const resetLatitude = () => {
    setLatitude("");
  };
  const resetLongitude = () => {
    setLongitude("");
  };

  return (
    <LongitudeContext.Provider
      value={{ longitude, setLongitude, resetLongitude }}
    >
      <LatitudeContext.Provider
        value={{ latitude, setLatitude, resetLatitude }}
      >
        <CurrentLocationContext.Provider
          value={{ checked, setChecked, resetChecked }}
        >
          {children}
        </CurrentLocationContext.Provider>
      </LatitudeContext.Provider>
    </LongitudeContext.Provider>
  );
}
