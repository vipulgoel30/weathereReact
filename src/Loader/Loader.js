import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLoaderContext } from "../ContextProviders/LoaderContextProvider";
import LoaderItem from "./LoaderItem";

// whole container of the loader
const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

// container for loader elements
const LoaderElementsContainer = styled.div`
  display: grid;
  width: 19rem;
  height: 19rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

// loader text styling
const LoaderText = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #444;
  letter-spacing: 0.1rem;
  font-size: 2.8rem;
  @media (40rem>width) {
    font-size: 1.6rem;
  }
`;
const LoaderDotes = styled.span`
  display: inline-block;
  letter-spacing: 0.3rem;
  margin: 0.2rem;
  font-size: 3.2rem;
  width: 3rem;
  @media (40rem>width) {
    font-size: 2.4rem;
  }
`;
// clubingof common rows
function LoaderRowStartEnd() {
  return (
    <>
      <LoaderItem size="large"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="medium"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="large"></LoaderItem>
    </>
  );
}
function LoaderRowNextStartEnd() {
  return (
    <>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="medium"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="medium"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
    </>
  );
}
function LoaderRowMiddle() {
  return (
    <>
      <LoaderItem size="medium"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="large"></LoaderItem>
      <LoaderItem size="small"></LoaderItem>
      <LoaderItem size="medium"></LoaderItem>
    </>
  );
}

function Loader() {
  // setting loader dotes data
  const [dotes, setDotes] = useState(".");
  const loader = useLoaderContext();
  useEffect(() => {
    const dotesInterval = setInterval(() => {
      setDotes((prevDotes) =>
        prevDotes.length === 3 ? "." : "".padStart(prevDotes.length + 1, ".")
      );
    }, 500);

    return () => {
      clearInterval(dotesInterval);
    };
  }, []);

  return (
    <>
      <LoaderContainer>
        <LoaderElementsContainer>
          <LoaderRowStartEnd />
          <LoaderRowNextStartEnd />
          <LoaderRowMiddle />
          <LoaderRowNextStartEnd />
          <LoaderRowStartEnd />
        </LoaderElementsContainer>
        <LoaderText>
          {loader.message || "Please allow the location"}
          <LoaderDotes>{dotes}</LoaderDotes>
        </LoaderText>
      </LoaderContainer>
    </>
  );
}

export default Loader;
