import React, { useEffect } from "react";
// import { useLoaderContext } from "../ContextProviders/LoaderContextProvider";

const useGettingLocation = () => {
  useEffect(() => {
    console.log("render");
  });
  // const loader = useLoaderContext();
  // console.log(location);
  console.log("helow");

  return "temp";
};
export { useGettingLocation };
