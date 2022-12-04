import React, { useEffect, useState } from "react";

import "./App.css";
import { useLoaderContext } from "./ContextProviders/LoaderContextProvider";
import {
  useLocationChangerContext,
  useLocationContext,
} from "./ContextProviders/LocationContextProvider";

import Loader from "./Loader/Loader";

import NavBar from "./NavBar/NavBar";

function App() {
  const loaderState = useLoaderContext();
  const locationChanger = useLocationChangerContext();
  const location = useLocationContext();
  useEffect(() => {
    locationChanger();
  }, []);
  console.log(location);
  return <>{loaderState.state ? <Loader /> : <NavBar />}</>;
}

export default App;
