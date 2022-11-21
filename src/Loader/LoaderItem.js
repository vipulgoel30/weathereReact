import styled, { keyframes, attrs, css } from "styled-components";
const rotate = keyframes`
to{
    rotate:360deg;
}
`;
const scale = keyframes`
33%{
    scale:1.1;
}
67%{
    scale:.9;
}
`;
const LoaderItem = styled.span.attrs((props) => {
  switch (props.size) {
    case "large":
      return {
        width: "4rem",
        background: "linear-gradient(to right, #2dc1e4, #e8ecc7)",
        animation: css`
          ${scale} 1s linear infinite backwards
        `,
      };
    case "medium":
      return {
        width: "3rem",
        background: "linear-gradient(to right, #e0c4fd, #8fc6fd)",
        animation: css`
          ${scale} 1s linear infinite backwards reverse
        `,
      };
    default:
      return {
        width: "2rem",
        background: "linear-gradient(to right, #1d2b64, #f8cdda)",
        animation: css`
          ${rotate} 1s linear infinite backwards
        `,
      };
  }
})`
  display: inline-block;
  margin: auto auto;
  border-radius: 100%;
  aspect-ratio: 1;
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  animation: ${(props) => props.animation};
`;

export default LoaderItem;
