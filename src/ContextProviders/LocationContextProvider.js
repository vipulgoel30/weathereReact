import React, { useState, useContext } from "react";

const LocationContext = React.createContext();
const LocationContextChanger = React.createContext();
export function Location() {
  return useContext(LocationContext);
}
export function LocationHandler() {
  return useContext(LocationContextChanger);
}
export default function LocationContextProvider({ children }) {
  const [location, setLocation] = useState(false);
  function locationHandler(data) {
    setLocation(data);
  }
  return (
    <LocationContext.Provider value={location}>
      <LocationContextChanger.Provider value={locationHandler}>
        {children}
      </LocationContextChanger.Provider>
    </LocationContext.Provider>
  );
}
