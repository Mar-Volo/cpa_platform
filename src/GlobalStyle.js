import { createGlobalStyle } from "styled-components";
import bg_img from "./images/bg_img.jpg";
import "modern-normalize";

const GlobalStyle = createGlobalStyle`
:root {
  scroll-behavior: smooth;
}
*, 
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${bg_img});
    background-repeat: repeat-y;
    background-size: 100% auto;
    color: #000;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  img {
  display: block;
  max-width: 100%;
  height: auto;
  }
  canvas {
  filter: blur(1px);
  opacity: 0.9;
  }
`;
export default GlobalStyle;
