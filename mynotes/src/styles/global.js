import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialised;
  }

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover,
  a:hover {
    filter: brightness(0.9);
  }
`