import React, { useState, useContext } from "react";
// import Loader from "../Loader/Loader";
const LoaderContext = React.createContext();
const LoaderChangerContext = React.createContext();

export const useLoaderContext = () => useContext(LoaderContext);
export const useLoaderChangerContext = () => useContext(LoaderChangerContext);

export default function LoaderContextProvider({ children }) {
  const [loader, setLoader] = useState({
      state: true,
    
  });
  const loaderChanger = (state) => {
    setLoader(state);
  };
  // useEffect(())
  return (
    <LoaderContext.Provider value={loader}>
      <LoaderChangerContext.Provider value={loaderChanger}>
        {children}
      </LoaderChangerContext.Provider>
    </LoaderContext.Provider>
  );
}
