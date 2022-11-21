import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Loader/Loader";
function App() {
  const [loaderState, setLoaderState] = useState(true);
  const [location, setLocation] = useState();
  const successLocation = (data) => {
    setLocation(data);

    setLoaderState(false);
  };
  const errorLocation = (data) => {
    setLoaderState(false);
  };
  useEffect(() => {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      timeout: 3000,
    });
    setTimeout(() => {
      setLoaderState(false);
    }, 3000);
    window.vibrate([200, 100, 300]);
  }, []);
  return <>{loaderState && <Loader />}</>;
}

export default App;
