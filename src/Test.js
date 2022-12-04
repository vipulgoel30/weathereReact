import styled, { keyframes, css, ThemeProvider } from "styled-components";
const Button = styled.button`
  font-size: 2em;
  padding: 0.25em 1em;
  margin: 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;
const theme = {
  main: "mediumseagreen",
};
function Test() {
  return (
    <>
      <Button theme={{ main: "royalblue" }}>Normal</Button>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
        <Button theme={{ main: "orange" }}>Overrided theme</Button>
      </ThemeProvider>
    </>
  );
}
export default Test;
