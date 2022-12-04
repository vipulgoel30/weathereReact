import React from "react";
import { DarkThemeContext, ToggleThemeContext } from "./src/ContextProvider";
function FunctionComponent() {
  const theme = DarkThemeContext();
  const toggle = ToggleThemeContext();
  const themeStyle = {
    color: theme ? "white" : "black",
    background: theme ? "black" : "white",
    padding: "2rem",
    fontSize: "2rem",
  };
  return (
    <>
      <button onClick={toggle}>Change Style</button>
      <div style={themeStyle}>Some Random Text</div>
    </>
  );
}

export default FunctionComponent;
