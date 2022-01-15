import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root {
  --black: #10111B;
  --gray: #7A7A7E;
  --white: #FFFFFF;
  --red-500: #E64040;
  --red-800: #4D0101;
  
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

@media (max-width: 768px) {
  font-size: 87.5%;
}






a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

