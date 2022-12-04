import React, { useContext, useState } from "react";
import LoaderContextProvider from "./LoaderContextProvider";
import LocationContextProvider from "./LocationContextProvider";
function ContextProvider({ children }) {
  return (
    <LoaderContextProvider>
      <LocationContextProvider>{children}</LocationContextProvider>
    </LoaderContextProvider>
  );
}
export default ContextProvider;
