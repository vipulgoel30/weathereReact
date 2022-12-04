import React, { useContext, useState, useEffect } from "react";
// import { gettingLocation } from "../Functions/useGettingLocation";
import {
  useLoaderChangerContext,
  useLoaderContext,
} from "./LoaderContextProvider";
const LocationContext = React.createContext();
const LocationChangerContext = React.createContext();

// getting context function
export function useLocationContext() {
  return useContext(LocationContext);
}
export function useLocationChangerContext() {
  return useContext(LocationChangerContext);
}

export default function LocationContextProvider({ children }) {
  let timeOut;

  const [location, setLocation] = useState(false);
  const loader = useLoaderContext();
  const loaderStateChanger = useLoaderChangerContext();
  const locationSuccess = (data) => {
    setLocation(data);
    loaderStateChanger({ state: true, message: "Getting the data" });
    setTimeout(() => {
      loaderStateChanger({ state: false });
    }, 1000);
    clearTimeout(timeOut);
  };
  const locationError = (error) => {
    console.log(error);
    setLocation(false);
    switch (error.message) {
      case "PERMISSION_DENIED":
        loaderStateChanger({ state: true, message: "Permission denied" });
        break;
      case "POSITION_UNAVAILABLE":
        loaderStateChanger({
          state: true,
          message: "Unable to detect position",
        });
        break;
      default:
        loaderStateChanger({
          state: true,
          message: "Internal error",
        });
    }
    setTimeout(() => {
      loaderStateChanger({ state: false });
    }, 1000);
    clearTimeout(timeOut);
  };
  const locationOptions = {
    timeout: 3000,
    enableHighAccuracy: true,
    maximumAge: 0,
  };
  const locationChanger = () => {
    loaderStateChanger({ state: true });

    const navigatorId = navigator.geolocation.getCurrentPosition(
      locationSuccess,
      locationError,
      locationOptions
    );
    timeOut = setTimeout(() => {
      console.log(loader);
      loaderStateChanger({
        state: true,
        message: "User does not react to location access",
      });
      timeOut = setTimeout(() => {
        console.log(loader);
        navigator.geolocation.clearWatch(navigatorId);
        loaderStateChanger({
          state: false,
        });
      }, 1000);
    }, 4000);
  };

  return (
    <LocationContext.Provider value={location}>
      <LocationChangerContext.Provider value={locationChanger}>
        {children}
      </LocationChangerContext.Provider>
    </LocationContext.Provider>
  );
}
